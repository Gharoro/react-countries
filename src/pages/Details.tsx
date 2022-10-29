import React, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { ThemeContext } from "../context/ThemeContext";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { fetchCountry } from "../store/actions";
import formatNumber from "../utils/formatNumber";
import Loader from "../utils/Loader";

export default function Details() {
  const themeContext = useContext(ThemeContext);
  const navigate = useNavigate();
  const params = useParams();
  const country_name: string | undefined = params.name;
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.country.country);
  const loading = useAppSelector((state) => state.country.loading);

  useEffect(() => {
    dispatch(fetchCountry(country_name));
  }, [dispatch, country_name]);
  return (
    <div>
      <Header />
      <main className={themeContext.isDark ? "country dark-main" : "country"}>
        <button
          className={`${themeContext.isDark && "dark-btn"}`}
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </button>

        {loading ? (
          <Loader />
        ) : (
          <div className="main-details">
            <img
              src={country?.flags?.svg || country?.flags?.png}
              alt="country flag"
            />
            <div
              className={
                themeContext.isDark
                  ? "details-right details-right-dark"
                  : "details-right"
              }
            >
              <h2>{country?.name}</h2>
              <div className="sub-details">
                <div>
                  <p>
                    <strong>Native Name:</strong>{" "}
                    <span>{country?.nativeName}</span>{" "}
                  </p>
                  <p>
                    <strong>Population:</strong>{" "}
                    <span>{formatNumber(300000)}</span>{" "}
                  </p>
                  <p>
                    <strong>Region:</strong> <span>{country?.region}</span>{" "}
                  </p>
                  <p>
                    <strong>Sub Region:</strong>{" "}
                    <span>{country?.subregion}</span>{" "}
                  </p>
                  <p>
                    <strong>Capital:</strong> <span>{country?.capital}</span>{" "}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Top Level Domain:</strong>{" "}
                    <span>{country?.topLevelDomain[0]}</span>{" "}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{" "}
                    <span>{country?.currencies[0].name}</span>{" "}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {country?.languages.map((lang, i) => (
                      <span key={lang.name}>
                        {lang.name} {i + 1 < country?.languages.length && " , "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div className="bottom">
                <h3>Border Countries:</h3>
                <ul className={`${themeContext.isDark && "dark-list"}`}>
                  {country?.borders.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
