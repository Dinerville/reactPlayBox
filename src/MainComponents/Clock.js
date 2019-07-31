import React, { useState, useEffect } from "react";

export default function Clock(props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    /*setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);*/
  });
  const clock = (
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
  );

  let clockPresense = "";
  if (props.isDisplayed) {
    clockPresense = clock;
  }

  return <div>{clockPresense}</div>;
}
