import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 id="greett">Good Day, User</h2>
        <Weather city="Abuja, Nigeria" />
        <p>
          This project was created by{" "}
          <a
            href="https://mellifluous-churros-9d41ce.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chinaza Nnadi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/chinazaaa-6th/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced
          </a>
        </p>
      </div>
    </div>
  );
}
