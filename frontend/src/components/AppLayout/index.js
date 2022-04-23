import { Link } from "react-router-dom";
import styles from './AppLayout.module.css';

const AppLayout = ({ children }) => {
  return (
    <>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
};

export default AppLayout;
