import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Favorite from "./Component/Favorite";
import Surah from "./Component/Surah/Surah";
import "./App.css";
import About from "./Component/About";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/surah/:number" element={<Surah />} />
          <Route exact path="/favorite" element={<Favorite />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Fragment>
    </Router>
  );
}
