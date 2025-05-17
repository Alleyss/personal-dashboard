import React, { useEffect, useState } from 'react';
import './Clock.css';

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourStyle = {
    transform: `rotate(${(hours * 30) + (minutes / 2)}deg)`,
  };
  const minuteStyle = {
    transform: `rotate(${minutes * 6}deg)`,
  };
  const secondStyle = {
    transform: `rotate(${seconds * 6}deg)`,
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.toLocaleDateString(undefined, { weekday: 'long' });
    const fullDate = date.toLocaleDateString();
    return {
      timeString: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
      fullDate,
      day,
    };
  };

  const { timeString, fullDate, day } = formatTime(time);

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="hour" style={hourStyle}></div>
        <div className="minute" style={minuteStyle}></div>
        <div className="second" style={secondStyle}></div>
        <div className="center"></div>
      </div>
      <div className="digital-clock">
        <h3>{timeString}</h3>
        <p>{day}, {fullDate}</p>
      </div>
    </div>
  );
}

export default AnalogClock;
