import React, { useContext, useRef } from "react";
import { BsBox2Heart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { AiOutlineInfoCircle, AiOutlineHome } from "react-icons/ai";
import DarkThemeContext from "../../Context/DarkModeContext";
import { NavLink } from "react-router-dom";
import SearchList from "./SearchList";

const NavBarToggleBtn = () => {
  const { darkTheme, enableDarkTheme, disEnableDarkTheme } =
    useContext(DarkThemeContext);
  const setTheme = () => {
    if (darkTheme) {
      disEnableDarkTheme();
    } else {
      enableDarkTheme();
    }
  };
  // Closing Menu Functionality
  const closeButtonRef = useRef(null);
  const handleButtonClick = () => {
    closeButtonRef.current.click();
  };

  return (
    <div className=" d-flex align-items-center justify-content-around">
      <button className="btn me-3 fs-4" type="input" onClick={() => setTheme()}>
        {!darkTheme ? (
          <RiSunLine className="p-0 m-0" />
        ) : (
          <RiMoonClearLine className="p-0 m-0" />
        )}
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Al Quran
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            ref={closeButtonRef}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav d-flex text-center flex-row justify-content-around">
            <li className="nav-item">
              <NavLink
                to="/"
                aria-current="page"
                exact="true"
                className="nav-link d-flex flex-column  justify-content-center align-items-center"
                activeclassname="active"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Home"
                data-bs-original-title="Home"
                onClick={handleButtonClick}
                title="Home"
              >
                <AiOutlineHome size={24} />
                <span className=" text-center">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/favorite"
                aria-current="page"
                exact="true"
                className="nav-link d-flex flex-column  justify-content-center align-items-center"
                activeclassname="active"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Favorite"
                data-bs-original-title="Favorite"
                onClick={handleButtonClick}
                title="Favorite"
              >
                <BsBox2Heart size={24} />
                <span className=" text-center">Favorites</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/profile"
                aria-current="page"
                exact="true"
                className="nav-link d-flex flex-column  justify-content-center align-items-center"
                activeclassname="active"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Profile"
                data-bs-original-title="Profile"
                onClick={handleButtonClick}
                title="Profile"
              >
                <CgProfile size={24} />
                <span className=" text-center">Profile</span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/about"
                aria-current="page"
                exact="true"
                className="nav-link d-flex flex-column  justify-content-center align-items-center"
                activeclassname="active"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="About"
                data-bs-original-title="About"
                onClick={handleButtonClick}
                title="About"
              >
                <AiOutlineInfoCircle size={24} />
                <span className=" text-center">About</span>
              </NavLink>
            </li>
          </ul>

          <SearchList />
        </div>
      </div>
    </div>
  );
};

export default NavBarToggleBtn;
