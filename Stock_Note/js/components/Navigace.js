import React from "react";
import { Link } from "react-router-dom";

function Navigace() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Stock Note
        </Link>

        {/* Tlačítko pro sbalení (hamburger) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/denik" className="nav-link">
                Deník
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/vyhledavani" className="nav-link">
                Vyhledávání
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                O aplikaci
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigace;
