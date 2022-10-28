import React, { useState, useContext } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { ThemeContext } from "../context/ThemeContext";

export default function SearchBar() {
  const regions = [
    { title: "Africa", value: "Africa" },
    { title: "America", value: "America" },
    { title: "Asia", value: "Asia" },
    { title: "Europe", value: "Europe" },
    { title: "Oceania", value: "Oceania" },
  ];

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef2 = React.useRef<HTMLDivElement>(null);
  useOutsideClick(wrapperRef, wrapperRef2, setShowOptions);
  const themeContext = useContext(ThemeContext);

  return (
    <div className="search-bar">
      <div
        className={
          themeContext.isDark
            ? "search-input search-input-dark"
            : "search-input"
        }
      >
        <input
          type="text"
          name="search"
          placeholder="Search for a country..."
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div
        className={
          themeContext.isDark
            ? "select-region select-region-dark"
            : "select-region"
        }
      >
        <div
          ref={wrapperRef2}
          className={
            themeContext.isDark
              ? "select-region-heading select-region-heading-dark"
              : "select-region-heading"
          }
          onClick={() => setShowOptions(!showOptions)}
        >
          <h6>Filter by Region</h6>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
        {showOptions && (
          <div
            ref={wrapperRef}
            className={
              themeContext.isDark
                ? "select-options select-options-dark"
                : "select-options"
            }
          >
            {regions.map((region) => (
              <p key={region.title}>{region.value}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
