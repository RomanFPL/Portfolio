import React, { createContext, useEffect, useState } from "react";
import { getApiData } from "../../service";
import Spinner from "../Spinner";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(true);
  const [projectData, setProjectData] = useState(undefined);
  const [skillData, setSkillData] = useState(undefined);
  const [menuData, setMenuData] = useState(undefined);
  useEffect(() => {
    getApiData("http://localhost:3001/skills").then((data) =>
      setSkillData(data)
    );
    getApiData("http://localhost:3001/projects").then((data) =>
      setProjectData(data)
    );
    getApiData("http://localhost:3001/menu").then((data) =>
      setMenuData(data)
    );
  }, []);

  if (!projectData || !skillData || !menuData) {
    return <Spinner />;
  }
  return (
    <AppContext.Provider
      value={{
        projects: projectData,
        skills: skillData,
        menu: menuData,
        menuStatus: menuOpened,
        menuAction: setMenuOpened,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
