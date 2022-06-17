import { useState } from 'react';
import Calendars from '../components/calendars';
import styles from './home.module.css';
import DiaryList from '../components/diaryList';

const Home = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className={styles.home}>
      <Calendars onChange={setDate} date={date} />
      <DiaryList date={date} />
    </div>
  );
};

export default Home;
