import ProgressBar from "../ProgressBar";
import styles from "./SkillsPage.module.css";

const ChildSkillItem = ({
  item: { skillLabel, level, description, knowledgeList },
}) => {
  return (
    <div className={styles.extendedLabel}>
      <div className={styles.labelItem}>
        <h2>{skillLabel}</h2>
        <div>
          <ProgressBar progress={level} />
        </div>
      </div>
      {description ? <p>{description}</p> : ""}
      {knowledgeList
        ? knowledgeList.map((internalItem) => {
            return (
              <span key={internalItem} className={styles.itemList}>
                {internalItem}
              </span>
            );
          })
        : ""}
    </div>
  );
};

export default ChildSkillItem;
