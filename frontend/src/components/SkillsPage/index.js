import { useContext } from "react";
import { AppContext } from "../AppContext";
import SkillElement from "./SkillElement";
import styles from "./SkillsPage.module.css";

const SkillsPage = () => {
  const { skills } = useContext(AppContext);
  return (
    <div>
      <h1>SkillsPage</h1>
      <div className={styles.contentWrapper}>
        {skills.map(({ label, content }) => {
          return (
            <SkillElement key={label} label={label} childSkills={content} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
