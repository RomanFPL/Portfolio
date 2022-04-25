import { useContext } from "react";
import { AppContext } from "../AppContext";
import SkillElement from "./SkillElement";
import styles from "./SkillsPage.module.css";

const content = [
  {
    skillLabel: "JavaScript",
    level: 90,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing lit. Ducimus nihil possimus sed eum eaque debitis, cupiditate quos maiores molestias suscipit recusandae reprehenderit mollitia sint quo asperiores saepe! Ipsum, optio illum.",
    knowledgeList: ["Webpack", "React", "Vue", "Storybook"],
  },
  {
    skillLabel: "React",
    level: 90,
  },
];

const skillList = [
  {
    label: "Programing",
    childSkills: content,
  },
  {
    label: "Languages",
    childSkills: content,
  },
];

const SkillsPage = () => {
  const { skills } = useContext(AppContext);
  console.log(skills);
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
