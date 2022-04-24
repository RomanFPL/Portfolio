import React from "react";
import styles from "./SkillsPage.module.css";

const SkillsPage = () => {
  return (
    <div>
      <h1>SkillsPage</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.mainLabel}>
          <h2>Programing</h2>
          <div className={styles.extendedLabel}>
            <div className={styles.labelItem}>
              <h2>JavaScript</h2>
              <div className={styles.progressBar}>
                <div style={{ width: "40%" }} />
              </div>
            </div>
            <p>Experience: 24 month</p>
          </div>
        </div>
        <div className={styles.mainLabel}>
          <h2>Programing</h2>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
