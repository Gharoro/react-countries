import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  const themeContext = useContext(ThemeContext);
  const localTheme = localStorage.getItem("apptheme");
  useEffect(() => {
    if (themeContext.setIsDark) {
      if (localTheme === "light") {
        themeContext.setIsDark(false);
      } else {
        themeContext.setIsDark(true);
      }
    }
  }, [localTheme, themeContext]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/country/:name" element={<Details />} />
    </Routes>
  );
}

export default App;
