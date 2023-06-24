import React, { createContext, useEffect, useState } from "react";

const DarkThemeContext = createContext();

export const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const saveTheme = localStorage.getItem("darkTheme");
    return saveTheme ? JSON.parse(saveTheme) : false;
  });

  const enableDarkTheme = () => {
    setDarkTheme(true);
  };
  const disEnableDarkTheme = () => {
    setDarkTheme(false);
  };

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <DarkThemeContext.Provider
      value={{
        darkTheme,
        enableDarkTheme,
        disEnableDarkTheme,
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeContext;
