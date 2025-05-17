import React, { useState } from 'react';

function HabitTracker() {
  const [habits, setHabits] = useState([
    { name: 'Morning Exercise', status: {} },
    { name: 'Evening Walk', status: {} },
    { name: 'Writing Diary', status: {} }
  ]);
  const [dates, setDates] = useState(['20-10-24', '21-10-24', '22-10-24']);

  const toggleStatus = (habitIndex, date) => {
    const newHabits = [...habits];
    newHabits[habitIndex].status[date] = newHabits[habitIndex].status[date] === '✔' ? '✘' : '✔';
    setHabits(newHabits);
  };

  return (
    <div>
      <h2>Habit Tracker</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Habit</th>
            {dates.map((date, index) => (
              <th key={index}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, habitIndex) => (
            <tr key={habitIndex}>
              <td>{habit.name}</td>
              {dates.map((date, dateIndex) => (
                <td key={dateIndex} onClick={() => toggleStatus(habitIndex, date)}>
                  {habit.status[date] || '✘'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HabitTracker;
