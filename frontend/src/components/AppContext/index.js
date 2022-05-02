import React, { createContext, useEffect, useState } from "react";
import { getApiData } from "../../service";
import Spinner from "../Spinner";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const domain = process.env.REACT_APP_API_SERVICE;
  const [menuOpened, setMenuOpened] = useState(true);
  const [projectData, setProjectData] = useState(undefined);
  const [skillData, setSkillData] = useState(undefined);
  const [menuData, setMenuData] = useState(undefined);
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    getApiData(domain + "skills").then((data) => setSkillData(data));
    getApiData(domain + "projects").then((data) => setProjectData(data));
    getApiData(domain + "menu").then((data) => setMenuData(data));
    getApiData(domain + "profile").then((data) => setProfile(data));
  }, [domain]);

  if (!projectData || !skillData || !menuData || !profile) {
    return <Spinner />;
  }
  return (
    <AppContext.Provider
      value={{
        projects: projectData,
        skills: skillData,
        menu: menuData,
        profile,
        menuStatus: menuOpened,
        menuAction: setMenuOpened,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
