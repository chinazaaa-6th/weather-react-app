import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <h4>
        <i class="fa-solid fa-location-dot"></i>
        Abuja, Nigeria
      </h4>
      <ul>
        <li className="first">Wednesday, 3:00AM</li>
        <li className="first">Cloudy</li>
      </ul>
      <div className="row mold">
        <div className="col-6">
          <i class="fa-solid fa-cloud-sun part"></i> 8°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitaton: 16%</li>
            <li>Humidity: 78%</li>
            <li>Wind: 10km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
