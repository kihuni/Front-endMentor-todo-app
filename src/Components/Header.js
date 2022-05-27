import React, { useState } from "react";
import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";
import "./Header.css";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [iconTheme, setIconTheme] = useState(sunIcon);

  const changeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
    setIconTheme(theme == "dark" ? moonIcon : sunIcon);
  };
  return (
    <div>
      <div className="header"></div>
      <div className="background"></div>

      <div className="header-box">
        <div className="header-sbox">
          <h1 className="title">T O D O</h1>
          <img
            className="icons"
            src={iconTheme}
            alt="img icons"
            onClick={changeTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
