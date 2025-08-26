# Weather Map 

## Project Overview
Weather Map is a simple Node.js app that displays current weather and a tomorrow forecast guess for any city that user inputs. It uses Express server with EJS views and fetches data from [WeatherAPI.com](https://openweathermap.org/api) with corresponding endpoints.

## Table of Contents
- [Functional Requirement](#funreq)
- [Built With](#builtwith)
- [Getting Started](#getting-s)

## Functional Requirement
- Search Weather by entering city name.
- Display current weather condition with icon and temperature.
- Guess tomorrow weather condition in selection box.
- Reveal tomorrow's prdicted condition.

## Built With
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Axios](https://axios-http.com/docs/intro)
- [WeatherAPI.com](https://openweathermap.org/api)

## Getting Started
### Prerequisites
- Node.js(>= 18.x recommended)
- Weather API account + API key

### Installation
1. Clone the repository and install dependencies:
```bash
git clone https://github.com/ThelNuZaw/WeatherMap.git
cd WeatherMap
```
2. Install dependencies:
```bash
npm install
```
3. Running the Application
```bash
npm start
```
4. Open the app in browser at:
```bash
http://localhost:4000
```
## API Endpoints
- `GET/`
  Renders the home page
- `POST/getweather`
  q=<city name> input
  Displays current weather
  After this step, user can access the forecast.
- `POST/getweatherforecastin3days`
  Triggered after `/getweather`
  User may guess tomorrow's weather(Optional)
  Reveals the actual forecast for tomorrow.
