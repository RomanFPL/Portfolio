import styles from "./ProjectsPage.module.css";
import defaultProject from "../../common/coming.jpg";
import { Github } from "../../common/Icons";
import ProgressBar from "../ProgressBar";

const ProjectItem = ({
  project: { label, description, githubLink, projectPreviewLink, progress },
}) => {
  const githubPreview = githubLink ? (
    <a
      className={styles.githubLink}
      href={githubLink}
      target="_blank"
      rel="noreferrer"
    >
      <Github />
    </a>
  ) : (
    ""
  );

  return (
    <div className={styles.projectWrapper}>
      <div className={styles.textPart}>
        <div className={styles.projectProgress}>
          <h2>{label}</h2>
          <span>{progress === "100" ? "finished" : "in progress"}</span>
          <ProgressBar progress={progress} />
        </div>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div className={styles.visualPart}>
        <div className={styles.previewScreen}>
          <a href={projectPreviewLink}>
            <img src={defaultProject} alt={label} />
          </a>
        </div>
      </div>
      {githubPreview}
    </div>
  );
};

export default ProjectItem;
