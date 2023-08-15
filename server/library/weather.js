const findCity = require("./findCity");

function weather(request, response) {
  let dataToReturn = require("../data.json");

  if (request.query.city) {
    // dataToReturn = filterWeatherByCity(request.query.city);
    dataToReturn = findCity(request.query.city);
  }

  response.status(200).json(dataToReturn);
}

module.exports = weather;
