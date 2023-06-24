import React, { useContext } from "react";
import DarkThemeContext from "../Context/DarkModeContext";
import { BsBookFill, BsBox2HeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SlideBar = () => {
  const { darkTheme } = useContext(DarkThemeContext);

  return (
    <div
      className={`homeSlideBar flex-column flex-shrink-0 bg-${
        darkTheme ? "light" : "dark"
      } `}
      style={{
        width: "50px",
        height: "100%",
        textAlign: "center",
        zIndex: -1,
      }}
    >
      <ul
        className={`nav nav-pills nav-flush flex-column mb-auto text-center bg-body-${
          darkTheme ? "dark" : "light"
        }`}
        style={{
          position: "fixed",
          top: "56%",
          transform: "translateY(-50%)",
          left: 0,
          bottom: 0,
        }}
      >
        <li className="nav-item">
          <NavLink
            exact="true"
            to="/"
            className="nav-link py-3 border-bottom rounded-0"
            activeclassname="active"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Home"
            data-bs-original-title="Home"
            title="Home"
          >
            <BsBookFill size={24} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact="true"
            to="/favorite"
            className="nav-link py-3 border-bottom rounded-0"
            activeclassname="active"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Favorite"
            data-bs-original-title="Favorite"
            title="Favorite"
          >
            <BsBox2HeartFill size={24} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact="true"
            to="/profile"
            className="nav-link py-3 border-bottom rounded-0"
            activeclassname="active"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Profile"
            data-bs-original-title="Profile"
            title="Profile"
          >
            <CgProfile size={24} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact="true"
            to="/about"
            className="nav-link py-3 border-bottom rounded-0"
            activeclassname="active"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="About"
            data-bs-original-title="About"
            title="About"
          >
            <FcAbout size={24} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact="true"
            to="/account"
            className="nav-link py-3 border-bottom rounded-0"
            activeclassname="active"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Account"
            data-bs-original-title="Account"
            title="Account"
          >
            <RiLogoutBoxRLine size={24} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SlideBar;
