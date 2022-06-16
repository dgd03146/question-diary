import styles from './myHeader.module.css';

const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header className={styles.header}>
      <div className={styles.btnLeft}>{leftChild}</div>
      <div className={styles.text}>{headText}</div>
      <div className={styles.btnRight}>{rightChild}</div>
    </header>
  );
};

export default MyHeader;
