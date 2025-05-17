import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reminders, setReminders] = useState({});

  const addReminder = () => {
    const reminderText = prompt('Enter a reminder:');
    if (reminderText) {
      setReminders({
        ...reminders,
        [selectedDate.toDateString()]: reminderText,
      });
    }
  };

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
      />
      <div>
        <button onClick={addReminder}>Add Reminder</button>
        {reminders[selectedDate.toDateString()] && (
          <p>Reminder: {reminders[selectedDate.toDateString()]}</p>
        )}
      </div>
    </div>
  );
}

export default MyCalendar;
