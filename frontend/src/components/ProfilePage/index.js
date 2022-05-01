import Laptop from "../../common/Icons/Laptop";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <>
      <h1>About</h1>
      <div className={styles.contentWrapper}>
        <div>
          <p>
            Hi there, I am Roman \(^_^)/ <br />
            and here you can explore my portfolio:
          </p>
          <p className={styles.thin}>
            I am a translator and economist by profession. I even worked for an
            audit company for a while. At the same time, while studying at
            university, programming became my hobby, and later I found a job as
            a frontend developer and now I work as a full stack web developer.
          </p>
          <p>So feel free to contact me)</p>
        </div>
        <div>
          <Laptop />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
