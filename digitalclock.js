import React, { useState, useEffect } from 'react';
import './digitalclock.css';

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours.toString().padStart(2, '0') : '12'; // the hour '0' should be '12'
    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="clock-container">
      <h1 className="clock-title">Digital Clock</h1>
      <div className="clock-display">{formatTime(currentTime)}</div>
    </div>
  );
}

export default DigitalClock;
