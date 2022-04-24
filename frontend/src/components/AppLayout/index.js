import { Link } from "react-router-dom";
import styles from "./AppLayout.module.css";

const menuItemsArray = [
  {
    link: "/about",
    header: "About",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    link: "/projects",
    header: "Projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    link: "/skills",
    header: "Skills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

const AppLayout = ({ children }) => {
  return (
    <>
      <nav className={styles.menu}>
        <ul>
          {menuItemsArray.map(({ header, link, description }) => {
            return (
              <li>
                <Link to={link}>
                  <h2>{header}</h2>
                  <p>{description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={styles.contacts}>
        <h2>Contacts</h2>
        <div>
          <a href="https://www.facebook.com/">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.8 0H1.2C0.53625 0 0 0.53625 0 1.2V28.8C0 29.4638 0.53625 30 1.2 30H28.8C29.4638 30 30 29.4638 30 28.8V1.2C30 0.53625 29.4638 0 28.8 0ZM27.6 27.6H20.6963V18.3825H24.5963L25.1813 13.8563H20.6963V10.965C20.6963 9.6525 21.06 8.76 22.9388 8.76H25.335V4.71C24.9188 4.65375 23.4975 4.53 21.84 4.53C18.3825 4.53 16.0162 6.64125 16.0162 10.515V13.8525H12.1088V18.3787H16.02V27.6H2.4V2.4H27.6V27.6Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="/">
            <svg
              width="30"
              height="30"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.4246 0.8125H3.57539C2.05 0.8125 0.8125 2.05 0.8125 3.57539V32.4246C0.8125 33.95 2.05 35.1875 3.57539 35.1875H32.4246C33.95 35.1875 35.1875 33.95 35.1875 32.4246V3.57539C35.1875 2.05 33.95 0.8125 32.4246 0.8125ZM32.4246 32.4375C13.1832 32.4332 3.5625 32.4289 3.5625 32.4246C3.5668 13.1832 3.57109 3.5625 3.57539 3.5625C22.8168 3.5668 32.4375 3.57109 32.4375 3.57539C32.4332 22.8168 32.4289 32.4375 32.4246 32.4375ZM5.90859 13.6988H11.009V30.1043H5.90859V13.6988ZM8.46094 11.4559C10.0895 11.4559 11.4172 10.1324 11.4172 8.49961C11.4172 8.11139 11.3407 7.72697 11.1922 7.3683C11.0436 7.00963 10.8258 6.68374 10.5513 6.40922C10.2768 6.13471 9.95091 5.91696 9.59225 5.76839C9.23358 5.61982 8.84916 5.54336 8.46094 5.54336C8.07272 5.54336 7.6883 5.61982 7.32963 5.76839C6.97096 5.91696 6.64507 6.13471 6.37055 6.40922C6.09604 6.68374 5.87828 7.00963 5.72972 7.3683C5.58115 7.72697 5.50469 8.11139 5.50469 8.49961C5.50039 10.1324 6.82383 11.4559 8.46094 11.4559ZM19.302 21.9875C19.302 19.8477 19.7102 17.7766 22.3613 17.7766C24.9738 17.7766 25.0125 20.2215 25.0125 22.125V30.1043H30.1086V21.1066C30.1086 16.6895 29.1547 13.2906 23.9941 13.2906C21.5148 13.2906 19.852 14.6527 19.1688 15.9418H19.1V13.6988H14.2059V30.1043H19.302V21.9875Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="/">
            <svg
              width="40"
              height="30"
              viewBox="0 0 46 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.25 2.375L1.875 0.75H44.125L45.75 2.375V31.625L44.125 33.25H1.875L0.25 31.625V2.375ZM3.5 5.73875V30H42.5V5.742L24.0075 19.925H22.025L3.5 5.73875ZM39.3475 4H6.6525L23 16.5743L39.3475 4Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      {children}
    </>
  );
};

export default AppLayout;
