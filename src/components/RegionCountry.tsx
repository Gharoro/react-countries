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
      <Link to={`/country/${data.name.common}`}>
        <img src={data.flags.svg || data.flags.png} alt="country flag" />
        <div
          className={
            themeContext.isDark
              ? "country-details country-details-dark"
              : "country-details"
          }
        >
          <h2>{data.name.common}</h2>
          <h6>
            <strong>Population:</strong>
            <span> {formatNumber(data.population)}</span>
          </h6>
          <h6>
            <strong>Region:</strong> <span>{data.region}</span>
          </h6>
          <h6>
            <strong>Capital:</strong>
            <span> {data.capital && data.capital[0]}</span>
          </h6>
        </div>
      </Link>
    </div>
  );
}
