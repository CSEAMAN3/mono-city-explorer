const express = require("express");
const cors = require("cors");
const { response } = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const data = require("./data.json");
// console.log(data);

const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.status(200).json("You made it!");
});

app.get("/weather", (request, response) => {
  response.status(200).json(data);
});

app.listen(PORT, () => console.log(`App in running on port ${PORT}`));
