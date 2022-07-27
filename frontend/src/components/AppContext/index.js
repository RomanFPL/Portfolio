import React, { createContext, useCallback, useEffect, useState } from "react";
import { getApiData } from "../../service";
import ErrorPage from "../ErrorPage";
import Spinner from "../Spinner";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const domain = process.env.REACT_APP_API_SERVICE;
  const [menuOpened, setMenuOpened] = useState(true);
  const [isError, setIsError] = useState(false);
  const [projectData, setProjectData] = useState(undefined);
  const [skillData, setSkillData] = useState(undefined);
  const [menuData, setMenuData] = useState(undefined);
  const [profile, setProfile] = useState(undefined);

  const fetchData = useCallback(async () => {
    const fetchRoots = [
      {link: "skills", state: setSkillData},
      {link: "projects", state: setProjectData},
      {link: "menu", state: setMenuData},
      {link: "profile", state: setProfile},
    ]

    const data = fetchRoots.map(async ({link, state}) => {
      const dataValues =await  getApiData(domain + link);
      state(dataValues);  
    })

    try{
     await Promise.all([...data])
    } catch (e) {
      setIsError(true)
      console.log(`Here appeared the following error: ${e}`)
    }
  }, [domain])

  
  useEffect(() => {
    fetchData();
  }, [domain, fetchData]);

  const isLoading = (!projectData || !skillData || !menuData || !profile) && !isError

  if (isLoading) {
    return <Spinner />;
  }

  if(isError){
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
