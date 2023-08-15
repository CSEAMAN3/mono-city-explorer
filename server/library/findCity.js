const weatherdata = require("../data.json");

function findCity(item) {
  const locoCity = weatherdata.find((city) => city.city_name === item);
  return locoCity;
}

module.exports = findCity;
