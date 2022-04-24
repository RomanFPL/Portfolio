import ProjectItem from "./ProjectItem";
import styles from "./ProjectsPage.module.css";

const projects = [
  {
    label: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing lit. Ducimus nihil possimus sed eum eaque debitis, cupiditate ,",
    projectPreviewLink: "/",
    githubLink: "/"
  },
  {
    label: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing lit. Ducimus nihil possimus sed eum eaque debitis, cupiditate ,",
    projectPreviewLink: "/",
    githubLink: "/"
  },
  {
    label: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing lit. Ducimus nihil possimus sed eum eaque debitis, cupiditate ,",
    projectPreviewLink: "/",
    githubLink: "/"
  },
];

const ProjectsPage = () => {
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
