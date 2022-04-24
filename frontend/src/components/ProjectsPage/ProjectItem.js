import styles from "./ProjectsPage.module.css";
import defaultProject from "../../common/coming.jpg";
import { Github } from "../../common/Icons";

const ProjectItem = ({
  project: { label, description, githubLink, projectPreviewLink },
}) => {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.textPart}>
        <h2>{label}</h2>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div className={styles.visualPart}>
        <div className={styles.previewScreen}>
          <a href={projectPreviewLink}>
            <img src={defaultProject} alt="" />
          </a>
        </div>
      </div>
      {githubLink ? (
        <a className={styles.githubLink} href="/">
          <Github />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectItem;
