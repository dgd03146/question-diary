import React, { useContext, useState } from 'react';
import MyButton from '../layout/myButton';
import MyHeader from '../layout/myHeader';
import styles from './diaryEditor.module.css';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../store/authContext';

const DiaryEditor = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let navigate = useNavigate();
  const ctx = useContext(AuthContext);
  // date convert code
  const date = `${days[ctx.date.getDay()]}, ${
    months[ctx.date.getMonth()]
  } ${ctx.date.toDateString().slice(8, 10)}`;

  return (
    <div className={styles.diaryEditor}>
      <MyHeader
        headText={`${date}`}
        leftChild={<MyButton text={'Back'} onClick={() => navigate(-1)} />}
        rightChild={<MyButton text={''} />}
      />
      <div className={`${styles.container} ${styles.emotion}`}>
        <h2>How was your day?</h2>
        <div className={styles.emotionBox}>
          <img
            src={process.env.PUBLIC_URL + `/assets/emotion1.png`}
            alt="emotion1"
          />
          <img
            src={process.env.PUBLIC_URL + `/assets/emotion2.png`}
            alt="emotion1"
          />
          <img
            src={process.env.PUBLIC_URL + `/assets/emotion3.png`}
            alt="emotion1"
          />
          <img
            src={process.env.PUBLIC_URL + `/assets/emotion4.png`}
            alt="emotion1"
          />
          <img
            src={process.env.PUBLIC_URL + `/assets/emotion5.png`}
            alt="emotion1"
          />
        </div>
      </div>
      <div className={`${styles.container} ${styles.question}`}>
        <h2>What is important thing for you?</h2>
        <textarea type="text" className={styles.questionInput} />
      </div>
      <div className={`${styles.container} ${styles.photo}`}>
        <h2>Today's Photo</h2>
        <input type="file" />
      </div>
    </div>
  );
};

export default DiaryEditor;
