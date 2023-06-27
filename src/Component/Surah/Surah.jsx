import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Loading from "../Loader/Loader";
import DarkThemeContext from "../../Context/Context";

const MAX_description_LENGTH = 150;
const MAX_Translation_LENGTH = 100;

const SurahDetails = () => {
  const { darkTheme, filteredData } = useContext(DarkThemeContext);
  const navigate = useNavigate();
  const [activeHeader, setActiveHeader] = useState(false);
  const { number } = useParams();
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        setLoading(true);
        const response = await axios.request({
          method: "GET",
          url: `https://al-quran1.p.rapidapi.com/${number}`,
          headers: {
            "X-RapidAPI-Key":
              "7f8b510956msh8f0692e3dfa9107p148499jsn278c5b70ec5f",
            "X-RapidAPI-Host": "al-quran1.p.rapidapi.com",
          },
        });
        setSurah(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading state to false after the API request is completed
      }
    };
    fetchSurah();
  }, [number]);

  const [expanded, setExpanded] = useState(false);
  const [translationExpanded, setTranslationExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const toggleTranslation = () => {
    setTranslationExpanded(!translationExpanded);
  };

  const renderDescription = () => {
    if (surah.description.length <= MAX_description_LENGTH || expanded) {
      return surah.description;
    }
    return surah.description.substring(0, MAX_description_LENGTH) + "...";
  };

  const renderTranslation = (translation_eng) => {
    if (
      translation_eng.length <= MAX_Translation_LENGTH ||
      translationExpanded
    ) {
      return translation_eng;
    }
    return translation_eng.substring(0, MAX_Translation_LENGTH) + "...";
  };

  // handle surah selection and ayah selection
  const handleAyahChange = (surah, verse) => {
    setActiveHeader(false);
    navigate(`/surah/${surah.id}#${verse.id}`);
  };
  const toggleHeader = () => {
    setActiveHeader(!activeHeader);
  };
  return (
    <>
      {loading ? (
        <Loading className="W_90" />
      ) : !surah ? (
        <>
          <div className="container W_90 m-5 p-5">
            Error occurred while fetching data
          </div>
        </>
      ) : (
        <>
          <header
            className={`HeaderFixedTop z-2 ${activeHeader ? "" : "opacity-25"}`}
          >
            <div className="col-lg-6 col-sm-6 ">
              <div className="dropdown dropdown-center">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={toggleHeader}
                >
                  Surahs
                </button>
                <ul className="dropdown-menu scrollable-menu">
                  {filteredData.map((surah) => (
                    <li key={surah.number}>
                      <Link
                        to={`/surah/${surah.number}`}
                        onClick={() => setActiveHeader(false)}
                        className="dropdown-item"
                      >
                        {surah.englishName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="dropdown dropdown-center">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={toggleHeader}
                >
                  Ayahs
                </button>
                <ul className="dropdown-menu scrollable-menu ">
                  {Object.values(surah.verses).map((verse) => (
                    <li key={verse.id}>
                      <a
                        className="dropdown-item"
                        href={`#${verse.id}`}
                        onClick={() => handleAyahChange(surah, verse)}
                      >
                        {verse.id}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>

          <div className="container W_90 m-5 p-5  W_90 mx-auto"></div>
          <div className="container mx-auto  mb-5 ">
            <div className="mt-4 text-center ">
              <h2 className="surahNameEN">{surah.surah_name}</h2>
              <div className="d-flex align-items-center justify-content-center ">
                <p className="AR_Font size2V">
                  {surah.surah_name_ar} | {surah.translation}
                </p>
              </div>
              <p className="size2V text-center ">
                Revelation: {surah.type} | Total Verses: {surah.total_verses}
              </p>
              <p className="size1-5v">
                description: {renderDescription()}
                {surah.description.length > MAX_description_LENGTH && (
                  <button
                    onClick={toggleDescription}
                    className={`btn ${
                      darkTheme ? "text-dark" : "text-light"
                    } text-decoration-underline border-0 ms-0 ps-0`}
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>
            </div>

            <div className={`list-group list-group-flush`}>
              {Object.values(surah.verses).map((verse) => (
                <div
                  key={verse.id}
                  id={verse.id}
                  className={`list-group-item ${
                    darkTheme ? "lightTheme" : "darkTheme"
                  }`}
                >
                  <p className="size1-5v" id={verse.id}>
                    {verse.id}
                  </p>
                  <p style={{ direction: "rtl" }} className="surah_Font mt-1">
                    {verse.content.toString() + "۞"}
                  </p>
                  <p className="size1-5v">{verse.transliteration}</p>
                  <p className="size1-5v">
                    Translation: {renderTranslation(verse.translation_eng)}
                    {verse.translation_eng.length > MAX_Translation_LENGTH && (
                      <span
                        onClick={toggleTranslation}
                        className={`btn size1-5v text-decoration-underline border-0 m-0 p-0 ${
                          darkTheme ? "text-dark" : "text-light"
                        }`}
                      >
                        {translationExpanded ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SurahDetails;
