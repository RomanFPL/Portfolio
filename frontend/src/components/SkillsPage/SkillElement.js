import ChildSkillItem from "./ChildSkillItem";
import styles from "./SkillsPage.module.css";

const SkillElement = ({ label, childSkills }) => {
  const skillList = childSkills.map((childSkill, idx) => {
    return <ChildSkillItem item={childSkill} key={idx} />;
  });

  return (
    <>
      <h2>{label}</h2>
      <div className={styles.mainLabel}>{skillList}</div>
    </>
  );
};

export default SkillElement;
