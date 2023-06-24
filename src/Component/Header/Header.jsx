import React, { useContext, useState } from "react";
import DarkThemeContext from "../../Context/DarkModeContext";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import SearchList from "./SearchList";
import { Link } from "react-router-dom";
import "./Header.css";
import NavbarRight from "../../Layout/NavbarRight";

export default function Header() {
  const [searchSurah, setSearchSurah] = useState("");
  const { darkTheme, enableDarkTheme, disEnableDarkTheme } =
    useContext(DarkThemeContext);
  const setTheme = () => {
    if (darkTheme) {
      disEnableDarkTheme();
    } else {
      enableDarkTheme();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform search or any other action
  };

  return (
    <nav
      className="navbar bg-body-tertiary w-100"
      data-bs-theme={!darkTheme ? "dark" : "light"}
    >
      <div className=" d-flex align-items-center justify-content-between width_">
        <Link to="/" className="navbar-brand fs-1 fw-bold font-monospace">
          Al Quran
        </Link>

        <div className="navMidForm">
          <button
            type="button"
            className={`btn font2 me-2 d-flex align-items-center justify-content-center text-body-${
              !darkTheme ? "dark" : "secondary"
            }`}
            onClick={() => setTheme()}
          >
            {!darkTheme ? <RiSunLine /> : <RiMoonClearLine />}
          </button>

          {/* Button trigger modal */}
          <input
            className={`btn btn-${
              !darkTheme ? "dark" : "secondary"
            } text-start modal-button`}
            type="Search"
            value="Search"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            readOnly
          />

          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="10"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <form
                    className="navMidForm"
                    role="search"
                    onSubmit={handleSubmit}
                  >
                    <div className="d-flex">
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
                    </div>
                  </form>
                  {searchSurah && <SearchList searchSurah={searchSurah} />}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NavbarRight
          searchSurah={searchSurah}
          setSearchSurah={setSearchSurah}
        />
      </div>
    </nav>
  );
}
