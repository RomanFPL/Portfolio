import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.centerBody}>
      <div className={styles.loaderCircle}>
        Loading
        <span></span>
      </div>
    </div>
  );
};

export default Spinner;
