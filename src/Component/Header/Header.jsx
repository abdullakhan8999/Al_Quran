import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkThemeContext from "../../Context/DarkModeContext";
import NavBarToggleBtn from "./NavBarToggleBtn";
import { useEffect } from "react";

const Navbar = () => {
  const { darkTheme, searchSurah, setSearchSurah } =
    useContext(DarkThemeContext);
  useEffect(() => {
    if (!darkTheme) {
      window.document.body.style.backgroundColor = "#202529";
      window.document.body.style.color = "white";
    } else {
      window.document.body.style.backgroundColor = "#cce2ff";
      window.document.body.style.color = "black";
    }
  }, [darkTheme]);
  return (
    <nav
      className="navbar bg-body-tertiary w-100"
      data-bs-theme={!darkTheme ? "dark" : "light"}
    >
      <div className="d-flex mx-auto align-items-center justify-content-between W_90">
        <NavLink
          className="navbar-brand text-sm fs-3 fw-bold d-flex align-items-center justify-content-center "
          to="#"
        >
          <img
            src="https://res.cloudinary.com/dwpi8ryr2/image/upload/v1687622327/products/quran_futytf.png"
            alt="Logo"
            height={"35"}
            className="me-2"
          />
          Al Quran
        </NavLink>

        {/* search Model */}
        <input
          className="form-control w-25 me-2 d-none d-lg-block"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchSurah}
          onChange={(e) => setSearchSurah(e.target.value)}
        />

        {/* right part */}
        <NavBarToggleBtn />
      </div>
    </nav>
  );
};

export default Navbar;
