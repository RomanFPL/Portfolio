import SkillElement from "./SkillElement";
import styles from "./SkillsPage.module.css";

const childSkillsList = [
  {
    label: "JavaScript",
    progress: 90,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing lit. Ducimus nihil possimus sed eum eaque debitis, cupiditate quos maiores molestias suscipit recusandae reprehenderit mollitia sint quo asperiores saepe! Ipsum, optio illum.",
    internalList: ["Webpack", "React", "Vue", "Storybook"],
  },
  {
    label: "React",
    progress: 90,
  },
];

const skillList = [
  {
    label: "Programing",
    childSkills: childSkillsList,
  },
  {
    label: "Languages",
    childSkills: childSkillsList,
  },
];

const SkillsPage = () => {
  return (
    <div>
      <h1>SkillsPage</h1>
      <div className={styles.contentWrapper}>
        {skillList.map(({ label, childSkills }) => {
          return (
            <SkillElement key={label} label={label} childSkills={childSkills} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
