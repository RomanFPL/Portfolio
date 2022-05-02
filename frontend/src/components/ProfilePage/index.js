import { useContext } from "react";
import Laptop from "../../common/Icons/Laptop";
import { AppContext } from "../AppContext";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const { profile } = useContext(AppContext);

  const paragraphs = profile.map(({ paragraph }, idx) => (
    <p
      key={idx}
      className={idx === 1 ? styles.thin : idx === 2 ? styles.left : ""}
    >
      {paragraph}
    </p>
  ));

  return (
    <>
      <h1>About</h1>
      <div className={styles.contentWrapper}>
        <div>{paragraphs}</div>
        <div>
          <Laptop />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
