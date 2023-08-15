import "./Reset.css";
import "./App.css";

import { useState } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState({});

  function handleSearch(event) {
    setSearchQuery(event.target.value);
    // console.log(searchQuery);
  }

  async function getWeather(event) {
    event.preventDefault();
    const API = `http://localhost:8080/weather?city=${searchQuery}`;
    const res = await axios.get(API);
    console.log(res.data);
    console.log(res.data.data);
    setWeatherData(res.data);
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} getWeather={getWeather} />
      <Home weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
