import styles from "./Spinner.module.css";

import text from "../../mockText.json";

const Spinner = () => {
  return (
    <div className={styles.loaderCircle}>
      {text.spinnerText}
      <span></span>
    </div>
  );
};

export default Spinner;
