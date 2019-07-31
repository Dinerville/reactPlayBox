import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import MainCanvas from "./MainComponents/MainCanvas";
import Clock from "./MainComponents/Clock";

import "./styles.css";

function App() {
  const [isClockDisplayed, setClockDisplay] = useState(true);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setClockDisplay(!isClockDisplayed)}>
        Показать/спрятать часы
      </button>
      <Clock isDisplayed={isClockDisplayed} />
      <MainCanvas one="first Canvas" />
      <MainCanvas one="second Canvas" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
