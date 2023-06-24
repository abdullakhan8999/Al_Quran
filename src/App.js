import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Favorite from "./Component/Favorite";
import Account from "./Component/Account";
import "./App.css";
import About from "./Component/About";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/profile" element={<Account />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Fragment>
    </Router>
  );
}
