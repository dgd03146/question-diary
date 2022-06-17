import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './calendars.module.css';

const Calendars = ({ onChange, date }) => {
  return (
    <div className={styles.calendar}>
      <div className="calendar-container">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default Calendars;
