import { useContext } from "react";
import { AppContext } from "../AppContext";
import ProjectItem from "./ProjectItem";
import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  const { projects } = useContext(AppContext);
  return (
    <div>
      <h1>ProjectsPage</h1>
      <div className={styles.contentWrapper}>
        {projects.map((project) => {
          return <ProjectItem key={project.label} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
