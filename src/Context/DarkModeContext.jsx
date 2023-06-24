import axios from "axios";
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

  // All surahs
  const [data, setData] = useState([]);
  const [searchSurah, setSearchSurah] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // surah details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.alquran.cloud/v1/surah");
        const surahs = response.data.data.slice(0, 114);
        setData(surahs);
      } catch (error) {
        console.error(error);
        // Handle the error here
      }
    };
    fetchData();
  }, []);
  //filter data
  useEffect(() => {
    const filteredSurahs = data.filter(
      (surah) =>
        surah.englishName.toLowerCase().includes(searchSurah.toLowerCase()) ||
        surah.englishNameTranslation
          .toLowerCase()
          .includes(searchSurah.toLowerCase()) ||
        surah.number.toString().includes(searchSurah)
    );
    setFilteredData(filteredSurahs);
  }, [searchSurah, data]);

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <DarkThemeContext.Provider
      value={{
        darkTheme,
        enableDarkTheme,
        disEnableDarkTheme,
        searchSurah,
        setSearchSurah,
        filteredData,
        setFilteredData,
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeContext;
