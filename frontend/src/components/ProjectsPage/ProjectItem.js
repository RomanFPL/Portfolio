import styles from "./ProjectsPage.module.css";
import { Github } from "../../common/Icons";
import ProgressBar from "../ProgressBar";
import { useState } from "react";
import classNames from "classnames";
import ImagePatch from "../ImagePatch";

const ProjectItem = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const onLoad = () => {
    setIsLoaded(true);
  };

  if (!project) return null;

  const {
    label,
    description,
    githubLink,
    projectPreviewLink,
    progress,
    imgLink,
  } = project;

  const githubPreview = githubLink && (
    <a
      className={styles.githubLink}
      href={githubLink}
      target="_blank"
      rel="noreferrer"
    >
      <Github />
    </a>
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
            <img
              className={classNames(styles.previewScreenImg, {
                [styles.hideImg]: !isLoaded,
              })}
              onLoad={onLoad}
              src={imgLink}
              alt={label}
            />
            {!isLoaded && <ImagePatch />}
          </a>
        </div>
      </div>
      {githubPreview}
    </div>
  );
};

export default ProjectItem;
