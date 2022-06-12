import "./Header.css";
import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";
import lightBackground from "../images/bg-desktop-light.jpg"
import darkBackground from "../images/upper.jpg"
import lightMobile from "../images/bg-mobile-light.jpg"
import darkMobile from "../images/bg-mobile-dark.jpg"
import {useState} from "react"



const Header = () => {

  const[theme, setTheme] = useState({
    desktop: {
      light:lightBackground,
      dark: darkBackground
    },
    mobile: {
      light: lightMobile,
      dark: darkMobile
    }
  })
  const [{iconTheme, setIconTheme}] = useState(sunIcon);

  const changeTheme = () => {
    setTheme(theme == desktop.light ? desktop.dark :desktop.dark);
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
