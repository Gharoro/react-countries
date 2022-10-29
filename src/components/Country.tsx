import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { ICountry } from "../types/redux-types";
import formatNumber from "../utils/formatNumber";

export default function Country({ data }: { data: ICountry }) {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={
        themeContext.isDark ? "country-card country-card-dark" : "country-card"
      }
    >
      <Link to={`/country/${data.alpha3Code}`}>
        <img src={data.flags.svg || data.flags.png} alt="country flag" />
        <div
          className={
            themeContext.isDark
              ? "country-details country-details-dark"
              : "country-details"
          }
        >
          <h2>{data.name}</h2>
          <p>
            <strong>Population:</strong>
            <span> {formatNumber(data.population)}</span>
          </p>
          <p>
            <strong>Region:</strong> <span>{data.region}</span>
          </p>
          <p>
            <strong>Capital:</strong>
            <span> {data.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
