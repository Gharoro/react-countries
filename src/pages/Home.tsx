import React, { useEffect, useContext, useState } from "react";
import Country from "../components/Country";
import Header from "../components/Header";
import RegionCountry from "../components/RegionCountry";
import SearchBar from "../components/SearchBar";
import { ThemeContext } from "../context/ThemeContext";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchCountries, filterCountries } from "../store/actions";
import { ICountry, IFilterCountry } from "../types/redux-types";
import Loader from "../utils/Loader";

export default function Home() {
  const themeContext = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.country.countries);
  const regionalCountries = useAppSelector(
    (state) => state.country.regionalCountries
  );
  const loading = useAppSelector((state) => state.country.loading);
  const isFilter = useAppSelector((state) => state.country.isFilter);
  const [selected, setSelected] = useState<string>("Filter by Region");
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (selected !== "Filter by Region") {
      dispatch(filterCountries(selected));
    }
  }, [dispatch, selected]);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={`${themeContext.isDark && "dark-main"}`}>
        <SearchBar
          setSearchText={setSearchText}
          selected={selected}
          searchText={searchText}
          setSelected={setSelected}
        />

        {loading ? (
          <Loader />
        ) : (
          <div className="countries">
            {isFilter
              ? regionalCountries.length > 0 &&
                regionalCountries.map((country: IFilterCountry) => (
                  <RegionCountry key={country.name.common} data={country} />
                ))
              : countries.length > 0 &&
                countries.map((country: ICountry) => (
                  <Country key={country.name} data={country} />
                ))}
          </div>
        )}
      </main>
    </>
  );
}
