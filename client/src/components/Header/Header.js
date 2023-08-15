import "./Header.css";

export default function Header({ handleSearch, getWeather }) {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <h1 className="header-title">MetaWeather</h1>
          <p className="strapline">discover the weather</p>
        </div>
        <form onSubmit={getWeather} className="header-form">
          {/* <label className="header-label" htmlFor="locationInput">
            weather checker
          </label> */}
          <input
            className="header-input"
            id="locationInput"
            name="input"
            type="text"
            placeholder="enter location"
            onChange={handleSearch}
          />
          <button className="header-button" type="submit">
            Check Forcast
          </button>
        </form>
      </div>
    </header>
  );
}
