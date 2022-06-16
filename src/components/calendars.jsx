import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './calendars.module.css';

const Calendars = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.calendar}>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
};

export default Calendars;
