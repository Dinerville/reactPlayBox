import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import MainCanvas from "./MainComponents/MainCanvas";
import Clock from "./MainComponents/Clock";
import Workspace from "./MainComponents/Workspace";

import "./styles.css";

function App() {
  const [isClockDisplayed, setClockDisplay] = useState(true);

  const styles = {
    color: "black"
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div>
          <p>
            lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf asdfa sdf asdf
            asdf fdgsdfgsdfgsdfgsdfgsdfg sdfg sdfg
          </p>
        </div>

        <div className="light">
          <p>lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf</p>
        </div>

        <div>
          <p>lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf 33333</p>
        </div>

        <div>
          <div className="included">
            <div>
              <p>lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf 33333</p>
            </div>
            <div>
              <p>lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf 33333</p>
            </div>
            <div>
              <p>lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf 33333</p>
            </div>
          </div>
        </div>

        <div className="light">
          <p>lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf</p>
        </div>

        <div>
          <p>lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf 33333</p>
        </div>

        <div className="first">
          <p>
            lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf asdfa sdf asdf
            asdf fdgsdfgsdfgsdfgsdfgsdfg sdfg sdfg 333444
          </p>
        </div>

        <div className="light second">
          <p>lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf 22222</p>
        </div>

        <div className="third">
          <p>lal dfglsdfg lf sldfg lsdfg lsdfgl sldfgl sdflg sdf 33333</p>
        </div>
      </div>

      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setClockDisplay(!isClockDisplayed)} style={styles}>
        Показать/спрятать часы
      </button>
      <Workspace />
      <Clock isDisplayed={isClockDisplayed} />
      <MainCanvas one="first Canvas" />
      <MainCanvas one="second Canvas" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
