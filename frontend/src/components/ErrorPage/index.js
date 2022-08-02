import styles from "./ErrorPage.module.css";

import text from "../../mockText.json";

const ErrorPage = () => {
  return (
    <div className={styles.wrapText}>
      <h2>{text.errorTextPage}</h2>
    </div>
  );
};

export default ErrorPage;
