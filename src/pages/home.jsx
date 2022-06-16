import React from 'react';
import Calendars from '../components/calendars';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Calendars />
    </div>
  );
};

export default Home;
