import React, { createContext, useEffect, useState } from "react";
import { getApiData } from "../../service";
import Spinner from "../Spinner";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [projectData, setProjectData] = useState(undefined);
  useEffect(() => {
    getApiData().then((d) => setProjectData(d));
  }, []);

  if (!projectData) {
    return <Spinner />;
  }
  return (
    <AppContext.Provider value={{ projects: projectData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
