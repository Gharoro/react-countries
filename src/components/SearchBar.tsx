import React, { useState, useContext } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { ThemeContext } from "../context/ThemeContext";
import { useAppDispatch } from "../hooks/redux-hooks";
import { searchCountries } from "../store/actions";

export default function SearchBar({
  selected,
  searchText,
  setSelected,
  setSearchText,
}: {
  selected: string;
  searchText: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}) {
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
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchCountries(searchText));
  };

  return (
    <div className="search-bar">
      <div
        className={
          themeContext.isDark
            ? "search-input search-input-dark"
            : "search-input"
        }
      >
        <form onSubmit={handleSearch}>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            placeholder="Search for a country..."
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </form>
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
          <h1>{selected}</h1>
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
              <p
                onClick={() => {
                  setSelected(region.value);
                  setShowOptions(false);
                }}
                key={region.title}
              >
                {region.value}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
