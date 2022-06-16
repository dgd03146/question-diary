import styles from './myButton.module.css';
const MyButton = ({ text, onClick, type }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
      className={`${styles.MyButton} ${styles[`${btnType}`]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: 'default'
};

export default MyButton;
