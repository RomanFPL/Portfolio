import React, { createContext, useEffect, useState } from "react";
import { getApiData } from "../../service";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [projectData, setProjectData] = useState();
  useEffect(() => {
    getApiData().then((d) => setProjectData(d));
  }, []);
  return (
    <AppContext.Provider value={{ projects: projectData }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
