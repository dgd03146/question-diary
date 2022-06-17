import styles from './diaryList.module.css';
import MyHeader from '../layout/myHeader';
import MyButton from '../layout/myButton';
import { useState } from 'react';

const DiaryList = ({ date }) => {
  const slicedDate = date.toDateString().slice(0, 10);

  const [focusedDate, setFocusedDate] = useState(false);

  const [curDate, setCurDate] = useState(new Date());
  // const month = `${curDate.getMonth() + 1} ${curDate.getFullYear()}`;
  const month = `${curDate.toDateString().slice(4, 8)}${curDate
    .toDateString()
    .slice(10, 15)}`;

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div className={styles.diaryList}>
      <header className={styles.header}>
        <button className={styles.leftBtn} onClick={decreaseMonth}>
          {'<'}
        </button>
        <span>{month}</span>
        <button className={styles.rightBtn} onClick={increaseMonth}>
          {'>'}
        </button>
      </header>
      <div className={styles.filterWrapper}>
        <select name="" id="">
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value=""></option>
        </select>
        <button className={styles.create}>+ CREATE</button>
      </div>
      {/* <header className={styles.header}>
        <div className={styles.dateWrapper}>{slicedDate}</div>
        <button className={styles.create}>+ CREATE</button>
      </header> */}
    </div>
  );
};

export default DiaryList;
