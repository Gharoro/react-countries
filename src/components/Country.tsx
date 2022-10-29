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
      <Link to={`/country/${data.name}`}>
        <img src={data.flags.svg || data.flags.png} alt="country flag" />
        <div
          className={
            themeContext.isDark
              ? "country-details country-details-dark"
              : "country-details"
          }
        >
          <h2>{data.name}</h2>
          <h6>
            <strong>Population:</strong>
            <span> {formatNumber(data.population)}</span>
          </h6>
          <h6>
            <strong>Region:</strong> <span>{data.region}</span>
          </h6>
          <h6>
            <strong>Capital:</strong>
            <span> {data.capital}</span>
          </h6>
        </div>
      </Link>
    </div>
  );
}
