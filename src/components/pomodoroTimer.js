import React, { useState, useEffect } from 'react';

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);  // Default time is 25 minutes
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Timer logic: decrease time if timer is active
  useEffect(() => {
    let interval = null;
    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && minutes === 0 && seconds === 0) {
      clearInterval(interval);
      alert("Time's up!");
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <div>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          disabled={isActive}
        /> : 
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          disabled={isActive}
        />
      </div>
      <div>
        <button onClick={() => setIsActive(true)}>Start</button>
        <button onClick={() => setIsActive(false)}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>
        Time Left: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
}

export default PomodoroTimer;
