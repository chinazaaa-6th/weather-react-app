import React from "react";
import Temp from "./Temp.js";
import TheDate from "./TheDate";
export default function Info(props) {
  return (
    <div className="Info">
      <img src={props.data.icon} alt={props.data.desc} className="float-left" />
      <Temp celsius={props.data.temp} />
      <div className="row mold">
        <div className="col-6">
          <h4 className="noun">
            <i className="fa-solid fa-location-dot noun"></i>
            {props.data.city}, {props.data.country}
          </h4>
          <ul className="first">
            <li>
              <TheDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.desc}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.data.humid)}%</li>
            <li>Wind: {Math.round(props.data.wind)}km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
