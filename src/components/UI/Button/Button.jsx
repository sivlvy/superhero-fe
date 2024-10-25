import styles from "./button.module.scss";

const Button = ({ text, handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export { Button };
