import React, { useContext } from "react";
import DarkThemeContext from "../Context/DarkModeContext";
import SlideBar from "../Layout/SlideBar";

const About = () => {
  const { darkTheme } = useContext(DarkThemeContext);
  return (
    <section className="HomeWarper">
      <SlideBar />
      <div
        className={`bg-body-${darkTheme ? "light" : "dark"}`}
        style={{ marginTop: "4rem" }}
      ></div>
    </section>
  );
};

export default About;
