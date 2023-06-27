import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkThemeContext from "../../Context/Context";
import NavBarToggleBtn from "./NavBarToggleBtn";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { useEffect } from "react";

const Navbar = () => {
  const { darkTheme, enableDarkTheme, disEnableDarkTheme } =
    useContext(DarkThemeContext);
  const setTheme = () => {
    if (darkTheme) {
      disEnableDarkTheme();
    } else {
      enableDarkTheme();
    }
  };

  useEffect(() => {
    if (!darkTheme) {
      window.document.body.style.backgroundColor = "#202529";
      window.document.body.style.color = "white";
    } else {
      window.document.body.style.backgroundColor = "#eaeaed";
      window.document.body.style.color = "black";
    }
  }, [darkTheme]);
  return (
    <nav
      className="navbar bg-body-tertiary w-100 fixed-top"
      data-bs-theme={!darkTheme ? "dark" : "light"}
    >
      <div className="d-flex mx-auto align-items-center justify-content-between W_90">
        <div className="d-flex align-items-center">
          <NavBarToggleBtn />
          <NavLink
            className="navbar-brand mx-2 text-sm fs-3 fw-bold d-flex align-items-center justify-content-center "
            to="/"
          >
            <img
              src="https://res.cloudinary.com/dwpi8ryr2/image/upload/v1687622327/products/quran_futytf.png"
              alt="Logo"
              height={"35"}
              className="me-2"
            />
            Al Quran
          </NavLink>
        </div>

        {/* right part */}
        <button
          className="btn me-3 fs-4"
          type="input"
          onClick={() => setTheme()}
        >
          {!darkTheme ? (
            <RiSunLine className="p-0 m-0" />
          ) : (
            <RiMoonClearLine className="p-0 m-0" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
