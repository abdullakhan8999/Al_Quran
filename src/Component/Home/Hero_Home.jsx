import React, { useContext, useState } from "react";
import DarkThemeContext from "../../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Hero_Home({ searchBarRef, containerRef }) {
  const { searchSurah, setSearchSurah, filteredData, setFilteredData } =
    useContext(DarkThemeContext);
  const navigate = useNavigate();

  //orders
  const [inOrder, setInOrder] = useState(true);
  const SortBySerial = () => {
    let sorted;
    if (inOrder) {
      sorted = [...filteredData].sort((a, b) => b.number - a.number);
      setFilteredData(sorted);
      setInOrder(false);
    } else {
      sorted = [...filteredData].sort((a, b) => a.number - b.number);
      setFilteredData(sorted);
      setInOrder(true);
    }
  };
  const SortBySurahName = () => {
    let sorted;
    if (inOrder) {
      sorted = [...filteredData].sort((a, b) =>
        b.englishName.localeCompare(a.englishName)
      );
      setFilteredData(sorted);
      setInOrder(false);
    } else {
      sorted = [...filteredData].sort((a, b) =>
        a.englishName.localeCompare(b.englishName)
      );
      setFilteredData(sorted);
      setInOrder(true);
    }
  };
  const SortByTotalAyah = () => {
    let sorted;
    if (inOrder) {
      sorted = [...filteredData].sort(
        (a, b) => a.numberOfAyahs - b.numberOfAyahs
      );
      setFilteredData(sorted);
      setInOrder(false);
    } else {
      sorted = [...filteredData].sort(
        (a, b) => b.numberOfAyahs - a.numberOfAyahs
      );
      setFilteredData(sorted);
      setInOrder(true);
    }
  };

  return (
    <div className="hero">
      <div className="heroSection mx-auto" ref={searchBarRef}>
        <input
          id="heroSearchBar"
          className="form-control searchBar mx-auto rounded-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchSurah}
          onChange={(e) => setSearchSurah(e.target.value)}
        />
        <div
          ref={containerRef}
          className="d-flex justify-content-center  mx-auto pt-3"
        >
          <button
            className="btn btn-secondary btn-change rounded-pill px-3 mx-1  text-nowrap"
            type="button"
            disabled
          >
            Sort by
          </button>
          <button
            className="btn btn-light btn-change rounded-pill px-3 mx-1 text-nowrap"
            type="button"
            onClick={SortBySerial}
          >
            Serial
          </button>
          <button
            className="btn btn-primary btn-change rounded-pill px-2 mx-1 text-nowrap"
            type="button"
            onClick={SortBySurahName}
          >
            Surah Name
          </button>
          <button
            className="btn btn-info btn-change  rounded-pill px-3 mx-1 text-nowrap"
            type="button"
            onClick={SortByTotalAyah}
          >
            Total Ayah
          </button>
          <button
            className="btn btn-danger bg-opacity-25 btn-change  rounded-pill px-3 mx-1 text-nowrap"
            type="button"
            onClick={() => navigate("/favorite")}
          >
            Favorites
          </button>
        </div>
      </div>
    </div>
  );
}
