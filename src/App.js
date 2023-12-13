import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 id="greett">Good Day, User</h2>
        <div className="row head">
          <div className="col-6">
            <form>
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-part"
              />
              <input type="submit" value="Search" className="form-second" />
            </form>
          </div>
        </div>
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
