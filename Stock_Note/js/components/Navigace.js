import React from "react";
import { Link } from "react-router-dom";

function Navigace() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Stock Note
        </Link>
        <div className="collapse navbar-collapse">
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
