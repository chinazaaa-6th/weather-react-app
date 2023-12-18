import React, { useState } from "react";
import axios from "axios";
import Info from "./Info";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ load: false });
  const [cityy, sayCityy] = useState(props.city);
  function handleResponse(response) {
    setWeather({
      load: true,
      temp: response.data.temperature.current,
      wind: response.data.wind.speed,
      coord: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      humid: response.data.temperature.humidity,
      desc: response.data.condition.description,
      icon: response.data.condition.icon_url,
      city: response.data.city,
      country: response.data.country,
    });
  }

  function search() {
    const key = "32fob4398470td4a73fb1e1ffb79ad6a";
    const api = `https://api.shecodes.io/weather/v1/current?query=${cityy}&key=${key}&units=metric`;
    axios.get(api).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    sayCityy(event.target.value);
  }

  if (weather.load) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-part"
                  autoFocus="on"
                  onChange={handleChange}
                />
                <input type="submit" value="Search" className="form-second" />
              </div>
            </div>
          </form>
          <Info data={weather} />
          <Forecast part={weather} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
