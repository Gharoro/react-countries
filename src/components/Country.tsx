import React from "react";
import { Link } from "react-router-dom";

export default function Country() {
  return (
    <div className="country-card">
      <Link to={`/country/germany`}>
        <img
          src="https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="country flag"
        />
        <div className="country-details">
          <h2>Germany</h2>
          <h6>
            <strong>Population:</strong>
            <span> 81,700,000</span>
          </h6>
          <h6>
            <strong>Region:</strong> <span>Europe</span>
          </h6>
          <h6>
            <strong>Capital:</strong>
            <span> Berlin</span>
          </h6>
        </div>
      </Link>
    </div>
  );
}
