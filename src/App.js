import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Yangon" />

        <footer>
          This project was coded by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Su
          </a>{" "}
          and is{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}