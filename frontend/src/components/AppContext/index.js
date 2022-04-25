import React, { createContext, useEffect, useState } from "react";
import { getApiData } from "../../service";
import Spinner from "../Spinner";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [projectData, setProjectData] = useState(undefined);
  const [skillData, setSkillData] = useState(undefined);
  useEffect(() => {
    getApiData("http://localhost:3001/skills").then((data) =>
      setSkillData(data)
    );
    getApiData("http://localhost:3001/projects").then((data) =>
      setProjectData(data)
    );
  }, []);

  if (!projectData || !skillData) {
    return <Spinner />;
  }
  return (
    <AppContext.Provider
      value={{
        projects: projectData,
        skills: skillData,
        menuStatus: menuOpened,
        menuAction: setMenuOpened,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
