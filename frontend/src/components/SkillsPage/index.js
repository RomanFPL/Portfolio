import React from "react";
import SkillElement from "./SkillElement";
import styles from "./SkillsPage.module.css";

const childSkill = [{ r: 1 }];

const SkillsPage = () => {
  return (
    <div>
      <h1>SkillsPage</h1>
      <div className={styles.contentWrapper}>
        <SkillElement label="Programing" childSkill={childSkill} />
      </div>
    </div>
  );
};

export default SkillsPage;
