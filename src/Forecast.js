import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {}
  let query = props.part.city;
  let key = "32fob4398470td4a73fb1e1ffb79ad6a";
  const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${key}&units=metric`;

  axios.get(forecastUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div>Tue</div>
          <img
            src={props.part.icon}
            alt={props.part.desc}
            className="float-left icon"
          />
          <div>
            <span className="temper-max">15° </span>
            <span className="temper-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
