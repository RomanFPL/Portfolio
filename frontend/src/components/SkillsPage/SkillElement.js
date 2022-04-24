import ChildSkillItem from "./ChildSkillItem";
import styles from "./SkillsPage.module.css";

const SkillElement = ({ label, childSkills }) => {
  return (
    <div className={styles.mainLabel}>
      <h2>{label}</h2>
      {childSkills.map((childSkill) => {
        return <ChildSkillItem item={childSkill} key={childSkill.label}/>;
      })}
    </div>
  );
};

export default SkillElement;
