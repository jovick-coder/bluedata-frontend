// import React,from "react";
// import './ThemeTogglerComponent.css'
// function ThemeTogglerComponent() {
//   return <div>ThemeTogglerComponent{console.log(darkTheme)}</div>;
// }

// export default ThemeTogglerComponent;

import React, { useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import "./ThemeTogglerComponent.css";
import { ThemesContext } from "../../context/themesContext";

function ThemeTogglerComponent() {
  const [theme, setTheme] = useContext(ThemesContext);
  const switchMode = () => {
    // check current theme and change to the opposite
    if (theme === "dark") {
      localStorage.setItem("telecomMerchantTheme", "light");
      setTheme("light");
      return;
    }
    localStorage.setItem("telecomMerchantTheme", "dark");
    setTheme("dark");
  };
  return (
    <>
      <button
        className="toggle-theme "
        onClick={() => {
          switchMode();
        }}
      >
        {/* render icon base on the current theme state */}
        {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </>
  );
}

export default ThemeTogglerComponent;
