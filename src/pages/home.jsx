import { useContext, useState } from 'react';
import Calendars from '../components/calendars';
import styles from './home.module.css';
import DiaryList from '../components/diaryList';
import AuthContext from '../store/authContext';

const Home = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className={styles.home}>
      <Calendars onChange={ctx.setDate} date={ctx.date} />
      <DiaryList date={ctx.date} className={styles.diaryList} />
    </div>
  );
};

export default Home;
