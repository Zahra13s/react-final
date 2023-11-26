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
            href="https://suthethnin.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Su
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Zahra13s/react-final"
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