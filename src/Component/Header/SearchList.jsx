import React, { useContext } from "react";
import DarkModeContext from "../../Context/DarkModeContext";

const SearchList = () => {
  const { searchSurah, setSearchSurah, filteredData } =
    useContext(DarkModeContext);

  return (
    <div className="d-lg-none d-sm-block">
      <form className="d-flex mt-3" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchSurah}
          onChange={(e) => setSearchSurah(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
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
    </div>
  );
};

export default SearchList;
