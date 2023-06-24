import React, { useContext, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import DarkThemeContext from "../../Context/DarkModeContext";

export default function Home() {
  const { darkTheme, filteredData, setFilteredData } =
    useContext(DarkThemeContext);
  const [inSerialOrder, setInSerialOrder] = useState(true);

  const containerRef = useRef(null);
  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      const isSmallDevice = window.innerWidth <= 768;
      if (isSmallDevice) {
        containerElement.classList.add("overflow-x-scroll");
        containerElement.classList.remove("justify-content-start");
        containerElement.classList.remove("W_90");
        containerElement.classList.remove("mx-autojustify-content-start");
      } else {
        containerElement.classList.remove("overflow-x-scroll");
      }
    }
  }, []);

  const SortBySerial = () => {
    let sorted;
    if (inSerialOrder) {
      sorted = [...filteredData].sort((a, b) => b.number - a.number);
      setFilteredData(sorted);
      setInSerialOrder(false);
    } else {
      sorted = [...filteredData].sort((a, b) => a.number - b.number);
      setFilteredData(sorted);
      setInSerialOrder(true);
    }
  };
  const SortBySurahName = () => {
    let sorted;
    if (inSerialOrder) {
      sorted = [...filteredData].sort((a, b) =>
        b.englishName.localeCompare(a.englishName)
      );
      setFilteredData(sorted);
      setInSerialOrder(false);
    } else {
      sorted = [...filteredData].sort((a, b) =>
        a.englishName.localeCompare(b.englishName)
      );
      setFilteredData(sorted);
      setInSerialOrder(true);
    }
  };
  const SortByTotalAyah = () => {
    let sorted;
    if (inSerialOrder) {
      sorted = [...filteredData].sort(
        (a, b) => a.numberOfAyahs - b.numberOfAyahs
      );
      setFilteredData(sorted);
      setInSerialOrder(false);
    } else {
      sorted = [...filteredData].sort(
        (a, b) => b.numberOfAyahs - a.numberOfAyahs
      );
      setFilteredData(sorted);
      setInSerialOrder(true);
    }
  };
  console.log(filteredData[0]);
  return (
    <section className="maxHW">
      <div className=" mx-auto">
        <div
          ref={containerRef}
          className="d-flex justify-content-start W_90 mx-auto pt-3"
        >
          <button
            className="btn btn-secondary rounded-pill px-3 mx-1  text-nowrap"
            type="button"
            disabled
          >
            Sort by
          </button>
          <button
            className="btn btn-light rounded-pill px-3 mx-1 text-nowrap"
            type="button"
            onClick={SortBySerial}
          >
            Serial
          </button>
          <button
            className="btn btn-primary rounded-pill px-3 mx-1 text-nowrap"
            type="button"
            onClick={SortBySurahName}
          >
            Surah Name
          </button>
          <button
            className="btn btn-info rounded-pill px-3 mx-1 text-nowrap"
            type="button"
            onClick={SortByTotalAyah}
          >
            Total Ayah
          </button>
          <button
            className="btn btn-success rounded-pill px-3 mx-1 text-nowrap"
            type="button"
          >
            Parah
          </button>
          <button
            className="btn btn-danger rounded-pill px-3 mx-1 d-none text-nowrap"
            type="button"
          ></button>
          <button
            className="btn btn-warning rounded-pill px-3 mx-1 d-none text-nowrap"
            type="button"
          ></button>
          <button
            className="btn btn-dark rounded-pill px-3 mx-1 d-none text-nowrap"
            type="button"
          ></button>
        </div>
        <div className="surahs">
          {filteredData.length > 0 ? (
            filteredData.map((surah, index) => (
              <Link
                to="/"
                className={`surahCard border border-success bg-${
                  !darkTheme ? "dark  text-light" : ""
                } text-decoration-none`}
                key={surah.number}
              >
                <div className="surah-card">
                  <div className="surah-card-main">
                    <span className="surahNumber">{surah.number}</span>
                  </div>

                  <div className="surah-details-wrapper ">
                    <h5 className="surahEngName">{surah.englishName}</h5>
                    <p className="englishNameTranslation">
                      {surah.englishNameTranslation}
                    </p>
                    <p className="numberOfAyahs">{`Verses: ${surah.numberOfAyahs}`}</p>
                    <p className="revelationType">{`Revelation: ${surah.revelationType}`}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="noResults">No results found.</div>
          )}
        </div>
      </div>
    </section>
  );
}
