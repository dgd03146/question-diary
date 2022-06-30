import React from 'react';
import styles from './diaryItem.module.css';

const DiaryItem = ({ date, content }) => {
  return (
    <div className={styles.diaryItem}>
      <div className={styles.imageContainer}>
        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <p>date{date}</p>
        <p>content{content}</p>
      </div>
    </div>
  );
};

export default DiaryItem;
