const express = require("express");
const cors = require("cors");
const { response } = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const weatherdata = require("./data.json");

const app = express();
app.use(cors());

// Code written to create a new array of objects with the city, date, weather description
// const locationObj = [];

// for (let i = 0; i < weatherdata.length; i++) {
//   let weatherdata1 = {
//     location: weatherdata[i].city_name,
//     date: weatherdata[i].data[0].valid_date,
//     description: weatherdata[i].data[0].weather.description,
//   };
//   let weatherdata2 = {
//     location: weatherdata[i].city_name,
//     date: weatherdata[i].data[1].valid_date,
//     description: weatherdata[i].data[1].weather.description,
//   };
//   let weatherdata3 = {
//     location: weatherdata[i].city_name,
//     date: weatherdata[i].data[2].valid_date,
//     description: weatherdata[i].data[2].weather.description,
//   };
//   locationObj.push(weatherdata1, weatherdata2, weatherdata3);
// }
// console.log(locationObj);

// function filterWeatherByCity(item) {
//   const theCity = locationObj.filter((city) => city.location === item);
//   return theCity;
// }

// function refactored into own file inside library
// function findCity(item) {
//   const locoCity = weatherdata.find((city) => city.city_name === item);
//   return locoCity;
// }

app.get("/", (request, response) => {
  response.status(200).json("You made it!");
});

const weatherFunc = require("./library/weather");

app.get("/weather", weatherFunc);

// weather endpoint before refactoring with library folder
// app.get("/weather", (rrequest, repsonse)=>{
// let dataToReturn = locationObj;
// if (request.query.city) {
//   // dataToReturn = filterWeatherByCity(request.query.city);
//   dataToReturn = findCity(request.query.city);
// }
// response.status(200).json(dataToReturn);
// });

app.listen(PORT, () => console.log(`App in running on port ${PORT}`));
