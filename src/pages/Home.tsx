import React, { useEffect, useContext } from "react";
import Country from "../components/Country";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const themeContext = useContext(ThemeContext);

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div>
      <Header />
      <main className={`${themeContext.isDark && "dark-main"}`}>
        <SearchBar />
        <div className="countries">
          {[...Array(8)].map((_, i) => (
            <Country key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
