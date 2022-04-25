import ChildSkillItem from "./ChildSkillItem";
import styles from "./SkillsPage.module.css";

const SkillElement = ({ label, childSkills }) => {
  return (
    <>
      <h2>{label}</h2>
      <div className={styles.mainLabel}>
        {childSkills.map((childSkill, idx) => {
          return <ChildSkillItem item={childSkill} key={idx} />;
        })}
      </div>
    </>
  );
};

export default SkillElement;
