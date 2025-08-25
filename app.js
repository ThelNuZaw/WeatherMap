import express from "express"
import bodyParser from "body-parser"
import axios from "axios"
const app = express();
const port = 4000;
const API_URL = "http://api.weatherapi.com/v1/current.json";
const APIForecast_URL = "http://api.weatherapi.com/v1/forecast.json";
const API_key = "e33a96a9f2924ddcaf102314250304";




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req,res)=>{
    res.render("map.ejs",{content: "Are you ready to get the weather information?",
                        guessingcondition:{
                            visible:false,
                            actual: "",
                            glogo:""
                        }})
});


app.post("/getweather", async(req, res)=>{
   try{
       const weather = await axios.get(API_URL , {
           params:{
               key: API_key,
               q: req.body.q,
           }
          })
          const name = weather. data.location.name;
          const result = weather.data.current.condition.text;
          const logo = weather.data.current.condition.icon;
          const temp = weather.data.current.temp_c;
         
          res.render("map.ejs", {content :{
            Lname: name,
            Logo: logo,
            Result:result,
            Temp:temp },
            guessingcondition:{
                visible:false,
                actual: "",
                glogo:""
            }
         });
   }
   catch(error){
       const errorm = "Failed to retrieve weather data"
       res.render("map.ejs", {content: errorm});
   }
 
});

app.post("/getweatherforecastin3days", async(req, res)=>{
    try{
        const weatherIn3days = await axios.get(APIForecast_URL, {
            params:{
                key: API_key,
                q: req.body.q,
                days: 2
            }
        })
        const guessing = weatherIn3days.data.forecast.forecastday[1].day.condition.text;
        const gues_logo = weatherIn3days.data.forecast.forecastday[1].day.condition.icon;
        res.render("map.ejs",{ content: {
            Lname: req.body.q, 
            Logo: req.body.logo, 
            Result: req.body.result, 
            Temp: req.body.temp 
        },
            guessingcondition : {
                visible: true,
                actual : guessing,
                glogo : gues_logo
            }
        

        })
    }
    catch(error){
        const errorm = "Failed to retrieve weather data"
       res.render("map.ejs", {content: errorm,
    guessingcondition:{
        visible:false,
        actual:"",
        glogo:""
    }});
    }
});


app.listen(port, () => {
   console.log(`Listening on port ${port}`);
 });
