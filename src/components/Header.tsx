import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const themeContext = useContext(ThemeContext);
  const switchTheme = () => {
    themeContext.setIsDark && themeContext.setIsDark(!themeContext.isDark);
    themeContext.isDark
      ? localStorage.setItem("apptheme", "light")
      : localStorage.setItem("apptheme", "dark");
  };

  return (
    <header className={`${themeContext.isDark && "dark-header"}`}>
      <h1>Where in the world?</h1>
      <div onClick={switchTheme}>
        <i className="fa-regular fa-moon"></i>
        <p>Dark Mode</p>
      </div>
    </header>
  );
}
