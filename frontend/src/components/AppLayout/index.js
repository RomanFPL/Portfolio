import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Contacts from "./Contacts";
import cn from "classnames";
import { AppContext } from "../AppContext";
import { Window } from "../../common/Icons";

const menuItemsArray = [
  {
    link: "/about",
    header: "About",
    description: "Here you can find brief information about me.",
  },
  {
    link: "/projects",
    header: "Projects",
    description:
      "Here is a list of projects I have worked on, their detailed description and links to the projects themselves.",
  },
  {
    link: "/skills",
    header: "Skills",
    description:
      "If you want to get acquainted with the technologies I worked with. On this page you can find a detailed list.",
  },
];

const AppLayout = ({ children }) => {
  const { menuStatus, menuAction } = useContext(AppContext);

  return (
    <>
      <div
        className={cn(styles.overlay, { [styles.overlayHidden]: menuStatus })}
      >
        <nav className={cn(styles.menu, { [styles.menuHidden]: menuStatus })}>
          <ul>
            {menuItemsArray.map(({ header, link, description }) => {
              return (
                <li key={link} onClick={() => menuAction(!!link)}>
                  <Link to={link}>
                    <h2>{header}</h2>
                    <p>{description}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Contacts item={menuStatus} />
      </div>
      <button
        className={styles.menuBtn}
        onClick={() => menuAction(!menuStatus)}
      >
        <Window />
      </button>
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default AppLayout;
