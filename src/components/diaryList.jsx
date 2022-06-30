import styles from './diaryList.module.css';
import MyHeader from '../layout/myHeader';
import MyButton from '../layout/myButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DiaryItem from './diaryItem';

const diaryList = [
  {
    id: 1,
    emotion: 1,
    date: 1,
    content: '111111'
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
  },
  {
    id: 6,
    emotion: 6,
    date: 6,
    content: '666666'
  },
  {
    id: 7,
    emotion: 7,
    date: 7,
    content: '777777'
  },
  {
    id: 8,
    emotion: 8,
    date: 8,
    content: '88888'
  },
  {
    id: 9,
    emotion: 8,
    date: 8,
    content: '88888'
  },
  {
    id: 10,
    emotion: 8,
    date: 8,
    content: '88888'
  },
  {
    id: 11,
    emotion: 8,
    date: 8,
    content: '88888'
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
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((item, idx) => (
        <option value={item.value} key={idx}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ date }) => {
  let navigate = useNavigate();

  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');

  const [curDate, setCurDate] = useState(new Date());

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
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const copyList = [...diaryList];

    const filteredList =
      filter === 'all'
        ? copyList
        : copyList.filter((item) => filterCallback(item));

    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  return (
    <div className={styles.diaryList}>
      <div className={styles.headerContainer}>
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
          <button className={styles.create} onClick={() => navigate('/new')}>
            + CREATE
          </button>
        </div>
      </div>
      <div className={styles.itemContainer}>
        {getFilteredDiary().map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>

      {/* <header className={styles.header}>
        <div className={styles.dateWrapper}>{slicedDate}</div>
        <button className={styles.create}>+ CREATE</button>
      </header> */}
    </div>
  );
};

export default DiaryList;
