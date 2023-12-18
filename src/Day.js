import React from "react";

export default function Day(props) {
  function goDay() {
    let date = new Date(props.daily.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="Day">
      <div>{goDay()}</div>
      <img
        src={props.daily.condition.icon_url}
        alt={props.daily.condition.icon}
        className="float-left icon"
      />
      <div>
        <span className="temper-max">
          {Math.round(props.daily.temperature.maximum)}°{" "}
        </span>
        <span className="temper-min">
          {Math.round(props.daily.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
