import React, { useState } from "react";
import axios from "axios";
import Day from "./Day";
import "./Forecast.css";

export default function Forecast(props) {
  let [ready, goReady] = useState(false);
  let [future, goFuture] = useState(null);
  function handleResponse(response) {
    goFuture(response.data.daily);
    goReady(true);
  }
  if (ready) {
    console.log(future);
    return (
      <div className="Forecast">
        <div className="row">
          {future.map(function (dailyForcast, index) {
            return (
              <div className="col-md" key={index}>
                <Day daily={dailyForcast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    let query = props.part.city;
    let key = "32fob4398470td4a73fb1e1ffb79ad6a";
    const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${key}&units=metric`;

    axios.get(forecastUrl).then(handleResponse);
    return null;
  }
}
