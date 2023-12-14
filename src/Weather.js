import React, { useState } from "react";
import axios from "axios";
import TheDate from "./TheDate";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ load: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      load: true,
      temp: response.data.temperature.current,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      humid: response.data.temperature.humidity,
      desc: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }
  if (weather.load) {
    return (
      <div className="Weather">
        <img src={weather.icon} alt={weather.desc} className="float-left" />
        <span className="temp">{Math.round(weather.temp)}</span>
        <small className="unit">°C</small>
        <div className="row mold">
          <div className="col-6">
            <h4 className="noun">
              <i className="fa-solid fa-location-dot noun"></i>
              {props.city}
            </h4>
            <ul className="first">
              <li>
                <TheDate date={weather.date} />
              </li>
              <li className="text-capitalize">{weather.desc}</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitaton: 16%</li>
              <li>Humidity: {Math.round(weather.humid)}%</li>
              <li>Wind: {Math.round(weather.wind)}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const key = "32fob4398470td4a73fb1e1ffb79ad6a";
    const api = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${key}&units=metric`;
    axios.get(api).then(handleResponse);

    return "Loading...";
  }
}
