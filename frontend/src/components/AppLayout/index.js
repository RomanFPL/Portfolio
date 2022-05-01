import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Contacts from "./Contacts";
import cn from "classnames";
import { AppContext } from "../AppContext";

const AppLayout = ({ children }) => {
  const { menuStatus, menuAction, menu } = useContext(AppContext);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      menuAction(false);
    }
  });

  return (
    <>
      <div
        className={cn(styles.overlay, { [styles.overlayHidden]: menuStatus })}
      >
        <nav className={cn(styles.menu, { [styles.menuHidden]: menuStatus })}>
          <ul>
            {menu.map(({ header, link, description }) => {
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
      {pathname === "/" || (
        <button
          className={cn(styles.menuBtn, { [styles.menuBtnClose]: !menuStatus })}
          onClick={() => menuAction(!menuStatus)}
        >
          <span className={styles.transparent} />
          <span />
          <span className={styles.transparent} />
          <span />
          <span />
          <span />
          <span className={styles.transparent} />
          <span />
          <span className={styles.transparent} />
        </button>
      )}
      <div className={styles.wrapper}>{children}</div>
    </>
  );
};

export default AppLayout;
