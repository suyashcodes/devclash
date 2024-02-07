import React, { useState, useEffect } from "react";

import "./timer.css";
const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const registrationDeadline = new Date("2024-02-10T10:00:00"); // Set your registration deadline here

    const calculateTimeRemaining = () => {
      const currentTime = new Date();
      const timeDifference = registrationDeadline - currentTime;

      if (timeDifference > 0) {
        const remainingDays = Math.floor(
          timeDifference / (1000 * 60 * 60 * 24),
        );
        const remainingHours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const remainingMinutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const remainingSeconds = Math.floor(
          (timeDifference % (1000 * 60)) / 1000,
        );

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds);
      }
    };

    const intervalId = setInterval(calculateTimeRemaining, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="wrap-timer" id="home">
      <div className="headingCont">
        <img className="eventlogo" src="assets/Eventtrans.png" alt="" />
        <img className="eventlogo" src="assets/Eventtrans.png" alt="" />
        <img className="eventlogo" src="assets/Eventtrans.png" alt="" />
      </div>
      <h1 className="slogan">INDIA'S BIGGEST TECH CLASH</h1>
      <div className="timerContainer">
        <div className="timerCont">
          <h2 className="timerTime">{days}</h2>
          <h6 className="timerHead">DAYS</h6>
        </div>
        <div className="timerCont">
          <h2 className="timerTime">{hours}</h2>
          <h6 className="timerHead">HOURS</h6>
        </div>
        <div className="timerCont">
          <h2 className="timerTime">{minutes}</h2>
          <h6 className="timerHead">MINUTES</h6>
        </div>
        <div className="timerCont">
          <h2 className="timerTime">{seconds}</h2>
          <h6 className="timerHead">SECONDS</h6>
        </div>
      </div>
      <div className="registerContainer">
        <a
          className="partii"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdetrl2h7xCSDs7yo3NeaPh0e1Y2dFvY2o3PwrgIHZ_ILG0wQ/viewform?usp=sf_link"
          rel="noreferrer"
        >
          <button className="registerButton">Participate Now</button>
        </a>
      </div>
    </div>
  );
};

export default Timer;
