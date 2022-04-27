import { useContext } from "react";
import { AppContext } from "../AppContext";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <div>
      <h1>About</h1>
      <div className={styles.contentWrapper}>
        <div>red</div>
      </div>
    </div>
  );
};

export default ProfilePage;
