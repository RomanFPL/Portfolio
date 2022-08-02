import styles from "./NotFound.module.css";

import text from "../../mockText.json";

const NotFound = () => {
  return (
    <div className={styles.wrapText}>
      <h2>{text.pageNotExist}</h2>
    </div>
  );
};

export default NotFound;
