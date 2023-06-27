import React, { useContext, useEffect } from "react";
import DarkThemeContext from "../Context/Context";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Favorite() {
  const {
    darkTheme,
    filteredData,
    setFilteredData,
    searchSurah,
    setSearchSurah,
    favorites,
    setFavorites,
  } = useContext(DarkThemeContext);
  // if (storedFavorites) {
  //   setFavorites(JSON.parse(storedFavorites));
  // }
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
  useEffect(() => {
    // Update local storage when favorites change
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <>
      <div className="mt-5 pt-5 W_90"></div>
      <div className="W_90 mx-auto">
        {favorites.length > 0 ? (
          <h2 className="W_90 size3V text-center text-uppercase  text-decoration-underline mx-auto mt-4 mb-2">
            Favorite Surahs
          </h2>
        ) : (
          ""
        )}
        <div className="surahs mb-5  ">
          {favorites.length > 0 ? (
            favorites.map((surah) => (
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
            <p className="size3v text-success text-center">
              Add your favorite{" "}
              <Link to="/" className="HoverUnderLine">
                Surahs
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
