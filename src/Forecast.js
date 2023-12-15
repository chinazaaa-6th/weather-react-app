import React from "react";
import Info from "./Info";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div>Thu</div>
          <Info data="icon" />
        </div>
      </div>
    </div>
  );
}
