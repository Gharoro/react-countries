import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Details() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <main className="country">
        <button onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </button>

        <div className="main-details">
          <img
            src="https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="country flag"
          />
          <div className="details-right">
            <h1>Belgium</h1>
            <div className="sub-details">
              <div>
                <h6>
                  <strong>Native Name:</strong> <span>Belgie</span>{" "}
                </h6>
                <h6>
                  <strong>Population:</strong> <span>11,222,222</span>{" "}
                </h6>
                <h6>
                  <strong>Region:</strong> <span>Europe</span>{" "}
                </h6>
                <h6>
                  <strong>Sub Region:</strong> <span>Western Europe</span>{" "}
                </h6>
                <h6>
                  <strong>Capital:</strong> <span>Brussels</span>{" "}
                </h6>
              </div>
              <div>
                <h6>
                  <strong>Top Level Domain:</strong> <span>.be</span>{" "}
                </h6>
                <h6>
                  <strong>Currencies:</strong> <span>Euro</span>{" "}
                </h6>
                <h6>
                  <strong>Languages:</strong> <span>Dutch, French, German</span>{" "}
                </h6>
              </div>
            </div>
            <div className="bottom">
              <h3>Border Countries:</h3>
              <ul>
                <li>France</li>
                <li>Germany</li>
                <li>Netherlands</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
