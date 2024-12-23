import React from "react";
import { Link } from "react-router-dom"; // Import Link component

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">RiskEvall</a>
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
              <Link className="nav-link" to="/services">Services</Link> {/* Link to Services page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link> {/* Link to Contact page */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link> {/* Link to AboutUs page */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;