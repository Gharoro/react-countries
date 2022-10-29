import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  const themeContext = useContext(ThemeContext);
  const localTheme = localStorage.getItem("apptheme");
  const bodyElt = document.querySelector("body");

  useEffect(() => {
    if (themeContext.setIsDark && bodyElt) {
      if (localTheme === "light") {
        themeContext.setIsDark(false);
        bodyElt.style.backgroundColor = "#f5f5f5";
      } else {
        themeContext.setIsDark(true);
        bodyElt.style.backgroundColor = "#192734";
      }
    }
  }, [localTheme, themeContext, bodyElt]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<Details />} />
    </Routes>
  );
}

export default App;
