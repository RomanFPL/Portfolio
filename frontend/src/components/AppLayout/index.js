import { Link } from "react-router-dom";

const AppLayout = ({ children }) => {
  return (
    <div>
      <nav>
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
    </div>
  );
};

export default AppLayout;
