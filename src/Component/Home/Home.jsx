import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkThemeContext from "../../Context/Context";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Hero_Home from "./Hero_Home";

export default function Home() {
  const navigate = useNavigate();
  const {
    darkTheme,
    filteredData,
    setFilteredData,
    searchSurah,
    setSearchSurah,
    favorites,
    setFavorites,
  } = useContext(DarkThemeContext);
  const containerRef = useRef(null);
  const homeWrapperRef = useRef(null);
  const searchBarRef = useRef(null);
  const searchBarObserver = useRef(null);

  useEffect(() => {
    // Load favorites from local storage
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }

    const containerElement = containerRef.current;
    if (containerElement) {
      const isSmallDevice = window.innerWidth <= 768;
      if (isSmallDevice) {
        containerElement.classList.add("overflow-x-scroll");
        containerElement.classList.remove("W_90");
        containerElement.classList.remove("justify-content-center");
        containerElement.classList.remove("mx-auto");
      } else {
        containerElement.classList.add("mx-auto");
        containerElement.classList.add("justify-content-center");
        containerElement.classList.remove("overflow-x-scroll");
      }
    }
    const homeWrapper = homeWrapperRef.current;
    const searchBar = searchBarRef.current;

    searchBarObserver.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          searchBar.classList.add("fix-search");
        } else {
          searchBar.classList.remove("fix-search");
        }
      });
    });

    if (homeWrapper && searchBar) {
      searchBarObserver.current.observe(homeWrapper);
    }

    return () => {
      if (searchBarObserver.current) {
        searchBarObserver.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    // Update local storage when favorites change
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (surah) => {
    // Check if the surah is already in favorites
    const isFavorite = favorites.some((item) => item.number === surah.number);
    if (!isFavorite) {
      setFavorites([...favorites, surah]);
    } else {
      const updatedFavorites = favorites.filter(
        (item) => item.number !== surah.number
      );
      setFavorites(updatedFavorites);
    }
  };
  const isFavorite = (surah) => {
    return favorites.some((item) => item.number === surah.number);
  };

  return (
    <section ref={homeWrapperRef} className="home-wrapper">
      <div className="mx-auto">
        <Hero_Home searchBarRef={searchBarRef} containerRef={containerRef} />
        {filteredData.length > 0 ? (
          <h2 className="W_90  text-center size3V text-uppercase  text-decoration-underline mx-auto mt-4 mb-2">
            Surahs
          </h2>
        ) : (
          ""
        )}
        <div className="surahs">
          {filteredData.length > 0 ? (
            filteredData.map((surah) => (
              <div
                className={`surahCard bg-${
                  !darkTheme ? "dark text-light" : ""
                } text-decoration-none`}
                key={surah.number}
              >
                <div className="surah-card">
                  <div className="surah-card-main">
                    <span className="surahNumber">{surah.number}</span>
                  </div>

                  <Link
                    className={`surah-details-wrapper ${
                      !darkTheme ? " text-light" : "text-dark"
                    } text-decoration-none`}
                    to={`/surah/${surah.number}`}
                    onClick={() => setSearchSurah("")}
                  >
                    <h5 className="surahEngName">{surah.englishName}</h5>
                    <p className="englishNameTranslation">
                      {surah.englishNameTranslation}
                    </p>
                    <p className="numberOfAyahs">{`Verses: ${surah.numberOfAyahs}`}</p>
                    <p className="revelationType">{`Revelation: ${surah.revelationType}`}</p>
                  </Link>
                  <button
                    type="button"
                    className="btn border-0 text-danger float-end float-top"
                    onClick={() => addToFavorites(surah)}
                  >
                    {isFavorite(surah) ? <AiFillHeart /> : <AiOutlineHeart />}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="containerCheck">
              <div className="">
                <p>Please Check the Name of surah/surah number.</p>
                <span className="handle"></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
