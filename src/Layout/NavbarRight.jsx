import React from "react";
import { Link } from "react-router-dom";
import { BsBookFill, BsBox2HeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import SearchList from "../Component/Header/SearchList";

const NavbarRight = ({ setSearchSurah, searchSurah }) => {
  return (
    <div className="Header-right d-lg-none d-sm-flex">
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
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav d-flex text-center flex-row justify-content-around">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                title="Home"
              >
                <BsBookFill size={24} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" title="Favorite">
                <BsBox2HeartFill size={24} />
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link" title="Profile">
                <CgProfile size={24} />
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/" className="nav-link" title="About">
                <FcAbout size={24} />
              </Link>
            </li>
          </ul>
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
          <SearchList searchSurah={searchSurah} />
        </div>
      </div>
    </div>
  );
};

export default NavbarRight;
