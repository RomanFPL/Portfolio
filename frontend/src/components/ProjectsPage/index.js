import styles from "./ProjectsPage.module.css";
import defaultProject from "../../common/coming.jpg";
import { Github } from "../../common/Icons";

const ProjectsPage = () => {
  console.log(defaultProject);
  return (
    <div>
      <h1>ProjectsPage</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.projectWrapper}>
          <div className={styles.textPart}>
            <h2>Project name</h2>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing lit. Ducimus
              nihil possimus sed eum eaque debitis, cupiditate quos maiores
              molestias suscipit recusandae reprehenderit mollitia sint quo
              asperiores saepe! Ipsum, optio illum,
            </p>
          </div>
          <div className={styles.visualPart}>
            <div className={styles.previewScreen}>
              <img src={defaultProject} alt="" />
            </div>
          </div>
          <a className={styles.githubLink} href="/">
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
