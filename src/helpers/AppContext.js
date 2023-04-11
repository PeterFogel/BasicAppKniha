import React, { useState } from "react";

const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState({
    id: null,
    name: null,
    role: null,
    isLoggedIn: false,
    setIsLoggedIn: null
  });

  const context = {
    ...contextValue,
    setContextValue: (value) => setContextValue({ ...contextValue, ...value })
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
