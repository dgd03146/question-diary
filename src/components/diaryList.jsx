import styles from './diaryList.module.css';
import MyHeader from '../layout/myHeader';
import MyButton from '../layout/myButton';
import { useState } from 'react';

const diaryList = [
  {
    id: 1,
    emotion: 1,
    date: '1',
    content: 'content'
  },
  {
    id: 2,
    emotion: 2,
    date: 2,
    content: '222222'
  },
  {
    id: 3,
    emotion: 3,
    date: 3,
    content: '333333'
  },
  {
    id: 4,
    emotion: 4,
    date: 4,
    content: '444444'
  },
  {
    id: 5,
    emotion: 5,
    date: 5,
    content: '555555'
  }
];

const sortOptionList = [
  { value: 'latest', name: 'Latest' },
  { value: 'oldest', name: 'Oldest' }
];

const filterOptionList = [
  { value: 'all', name: 'All' },
  {
    value: 'good',
    name: 'Good'
  },
  {
    value: 'bad',
    name: 'Bad'
  }
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={onChange}>
      {optionList.map((item) => (
        <option item>{item.name}</option>
      ))}
    </select>
  );
};

const DiaryList = ({ date }) => {
  // const slicedDate = date.toDateString().slice(0, 10);

  // const [focusedDate, setFocusedDate] = useState(false);

  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');

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

  const getFilteredDiary = () => {
    const filterCallback = (item) => {
      if (filter === 'all') {
        return parseInt(item.emoji <= 3);
      } else {
        return parseInt(item.emoji > 3);
      }
    };

    const compare = (a, b) => {
      if (sortType === 'latest') {
      }
    };
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
        <ControlMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        <ControlMenu
          value={filter}
          onChange={setFilter}
          optionList={filterOptionList}
        />
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
