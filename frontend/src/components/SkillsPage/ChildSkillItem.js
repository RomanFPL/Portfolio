import React from "react";
import styles from "./SkillsPage.module.css";

const ChildSkillItem = () => {
  return (
    <div className={styles.extendedLabel}>
      <div className={styles.labelItem}>
        <h2>JavaScript</h2>
        <div className={styles.progressBar}>
          <div style={{ width: "40%" }} />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nihil
        possimus sed eum eaque debitis, cupiditate quos maiores molestias
        suscipit recusandae reprehenderit mollitia sint quo asperiores saepe!
        Ipsum, optio illum.
      </p>
      <span className={styles.itemList}>Webpack</span>
      <span className={styles.itemList}>React</span>
      <span className={styles.itemList}>Angular</span>
      <span className={styles.itemList}>Angular</span>
      <span className={styles.itemList}>Angular</span>
      <span className={styles.itemList}>Angular</span>
      <span className={styles.itemList}>Angular</span>
    </div>
  );
};

export default ChildSkillItem;
