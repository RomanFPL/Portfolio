import { useContext } from "react";
import { AppContext } from "../AppContext";
import ProjectItem from "./ProjectItem";
import styles from "./ProjectsPage.module.css";
import cn from "classnames";

const ProjectsPage = () => {
  const { projects, menuStatus } = useContext(AppContext);
  return (
    <div>
      <h1>ProjectsPage</h1>
      <div
        className={cn(styles.contentWrapper, {
          [styles.contentWrapperHidden]: !menuStatus,
        })}
      >
        {projects.map((project) => {
          return <ProjectItem key={project.label} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
