import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { IFilterCountry } from "../types/redux-types";
import formatNumber from "../utils/formatNumber";

export default function RegionCountry({ data }: { data: IFilterCountry }) {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={
        themeContext.isDark ? "country-card country-card-dark" : "country-card"
      }
    >
      <Link to={`/country/${data.cioc}`}>
        <img src={data.flags.svg || data.flags.png} alt="country flag" />
        <div
          className={
            themeContext.isDark
              ? "country-details country-details-dark"
              : "country-details"
          }
        >
          <h2>{data.name.common}</h2>
          <p>
            <strong>Population:</strong>
            <span> {formatNumber(data.population)}</span>
          </p>
          <p>
            <strong>Region:</strong> <span>{data.region}</span>
          </p>
          <p>
            <strong>Capital:</strong>
            <span> {data.capital && data.capital[0]}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
