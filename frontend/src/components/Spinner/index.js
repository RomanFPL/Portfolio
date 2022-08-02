import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.loaderCircle}>
      Loading
      <span></span>
    </div>
  );
};

export default Spinner;
