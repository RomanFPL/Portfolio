import React from "react";
import ChildSkillItem from "./ChildSkillItem";
import styles from "./SkillsPage.module.css";

const SkillElement = ({ label, childSkill }) => {
  return (
    <div className={styles.mainLabel}>
      <h2>{label}</h2>
      {childSkill.map((childSkill) => {
        return <ChildSkillItem />;
      })}
    </div>
  );
};

export default SkillElement;
