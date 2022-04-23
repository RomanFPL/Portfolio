import React, { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  return <AppContext.Provider value={{number: 1}}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
