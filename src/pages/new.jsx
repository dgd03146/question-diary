import DiaryEditor from '../components/diaryEditor';
import styles from './new.module.css';

const New = () => {
  return (
    <div className={styles.new}>
      <DiaryEditor />
    </div>
  );
};

export default New;
