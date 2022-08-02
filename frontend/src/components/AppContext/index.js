import React, { createContext, useCallback, useEffect, useState } from "react";
import { getApiData } from "../../service";
import ErrorPage from "../ErrorPage";
import Spinner from "../Spinner";

import text from "../../mockText.json";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const domain = process.env.REACT_APP_API_SERVICE;
  const [menuOpened, setMenuOpened] = useState(true);
  const [isError, setIsError] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [skillData, setSkillData] = useState(null);
  const [menuData, setMenuData] = useState(null);
  const [profile, setProfile] = useState(null);

  const fetchData = useCallback(async () => {
    const fetchRoots = [
      { link: text.menu.skills, state: setSkillData },
      { link: text.menu.projects, state: setProjectData },
      { link: text.menu.main, state: setMenuData },
      { link: text.menu.profile, state: setProfile },
    ];

    const data = fetchRoots.map(async ({ link, state }) => {
      const dataValues = await getApiData(domain + link);
      state(dataValues);
    });

    try {
      await Promise.all([...data]);
    } catch (e) {
      setIsError(true);
      console.log(`${text.commonError}${e}`);
    }
  }, [domain]);

  useEffect(() => {
    fetchData();
  }, [domain, fetchData]);

  const isLoading =
    (!projectData || !skillData || !menuData || !profile) && !isError;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorPage />;
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
