import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progress, barHeight = 5 }) => {
  return (
    <div className={styles.progressBar}>
      <div style={{ width: `${progress}%`, height: `${barHeight}px` }} />
    </div>
  );
};

export default ProgressBar;
