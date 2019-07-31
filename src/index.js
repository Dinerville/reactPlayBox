import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Example />
      <Clock />
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  });

  return (
    <div>
      <p>
        {currentTime.getHours()}:
        {currentTime.getMinutes() < 10
          ? "0" + currentTime.getMinutes()
          : currentTime.getMinutes()}
        :
        {currentTime.getSeconds() < 10
          ? "0" + currentTime.getSeconds()
          : currentTime.getSeconds()}
      </p>
    </div>
  );
}

function Example() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
