import styles from "./SkillsPage.module.css";

const ChildSkillItem = ({
  item: { label, progress, description, internalList },
}) => {
  return (
    <div className={styles.extendedLabel}>
      <div className={styles.labelItem}>
        <h2>{label}</h2>
        <div className={styles.progressBar}>
          <div style={{ width: `${progress}%` }} />
        </div>
      </div>
      {description ? <p>{description}</p> : ""}
      {internalList
        ? internalList.map((internalItem) => {
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
