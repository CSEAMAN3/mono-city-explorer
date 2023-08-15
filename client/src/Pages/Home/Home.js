import "./Home.css";

export default function Home({ weatherData }) {
  return (
    <main>
      <div className="main-container">
        {weatherData &&
          weatherData.data?.map((forcast, idx) => {
            return (
              <div className="weather-card" key={idx}>
                <h1 className="wc-location">{weatherData.city_name}</h1>
                <p className="wc-date">{forcast.valid_date}</p>
                <p className="temp-title">Temperature</p>
                <p className="wc-temp">
                  {forcast.min_temp}&deg;c - {forcast.max_temp}&deg;c
                </p>
                <p className="wc-desc">{forcast.weather.description}</p>
              </div>
            );
          })}
        {/* {weatherData.data?.map((forcast) => {
          return <p>forcast.weather.description</p>;
        })} */}
      </div>
    </main>
  );
}
