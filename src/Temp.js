import React, { useState } from "react";

export default function Temp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="Temp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <small className="unit">
          °C |{" "}
          <a href="/" onClick={convertFar}>
            °F
          </a>
        </small>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temp">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <small className="unit">
          <a href="/" onClick={convertCel}>
            °C
          </a>{" "}
          | °F
        </small>
      </div>
    );
  }
}
