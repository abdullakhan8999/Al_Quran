import React, { useContext, useRef } from "react";
import { BsBox2Heart } from "react-icons/bs";
import { AiOutlineInfoCircle, AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import SearchList from "./SearchList";
import DarkThemeContext from "../../Context/Context";

const NavBarToggleBtn = () => {
  const { setSearchSurah } = useContext(DarkThemeContext);
  // Closing Menu Functionality
  const closeButtonRef = useRef(null);
  const handleButtonClick = () => {
    setSearchSurah("");
    closeButtonRef.current.click();
  };

  return (
    <div className=" d-flex align-items-center justify-content-around">
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
        onClick={() => {
          setSearchSurah("");
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="offcanvas offcanvas-start overflow-y-hidden"
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

          <SearchList handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default NavBarToggleBtn;
