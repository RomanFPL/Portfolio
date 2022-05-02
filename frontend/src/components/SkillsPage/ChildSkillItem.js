import ProgressBar from "../ProgressBar";
import styles from "./SkillsPage.module.css";

const ChildSkillItem = ({
  item: { skillLabel, level, description, knowledgeList },
}) => {
  const knowledgeLabels = knowledgeList
    ? knowledgeList.map((internalItem) => {
        return (
          <span key={internalItem} className={styles.itemList}>
            {internalItem}
          </span>
        );
      })
    : "";

  const descriptionExist = description ? <p>{description}</p> : "";

  return (
    <div className={styles.extendedLabel}>
      <div className={styles.labelItem}>
        <h2>{skillLabel}</h2>
        <div>
          <ProgressBar progress={level} />
        </div>
      </div>
      {descriptionExist}
      {knowledgeLabels}
    </div>
  );
};

export default ChildSkillItem;
