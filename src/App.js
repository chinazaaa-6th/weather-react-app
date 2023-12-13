import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 id="greett">Good Morning, User</h2>
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
        <Weather />
        <p>
          This project was created by{" "}
          <a href="https://mellifluous-churros-9d41ce.netlify.app">
            Chinaza Nnadi
          </a>{" "}
          and is{" "}
          <a href="https://github.com/chinazaaa-6th/weather-react-app">
            Open-sourced
          </a>
        </p>
      </div>
    </div>
  );
}
