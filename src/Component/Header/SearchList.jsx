import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchList = ({ searchSurah }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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

  return (
    <div className="list-group list-group-flush border-bottom scrollarea mt-3">
      {filteredData.length > 0 ? (
        filteredData.map((surah, index) => (
          <a
            href="/"
            className={`list-group-item list-group-item-action py-3 lh-sm ${
              index === 0 ? "active" : ""
            }`}
            key={surah.number}
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">{surah.englishName}</strong>
              <small className={`text-body-light`}>{surah.number}</small>
            </div>
            <div className={`col-10 mb-1 small`}>
              {surah.englishNameTranslation}
            </div>
          </a>
        ))
      ) : (
        <div>No results found.</div>
      )}
    </div>
  );
};

export default SearchList;
