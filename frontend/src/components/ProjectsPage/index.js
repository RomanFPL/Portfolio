import { useContext } from "react";
import { AppContext } from "../AppContext";
import ProjectItem from "./ProjectItem";
import styles from "./ProjectsPage.module.css";
import classNames from "classnames";

import text from "../../mockText.json";

const ProjectsPage = () => {
  const { projects, menuStatus } = useContext(AppContext);

  const projectList = projects.map((project) => {
    return <ProjectItem key={project.label} project={project} />;
  });

  return (
    <div>
      <h1>{text.pages.projects}</h1>
      <div
        className={classNames(styles.contentWrapper, {
          [styles.contentWrapperHidden]: !menuStatus,
        })}
      >
        {projectList}
      </div>
    </div>
  );
};

export default ProjectsPage;
