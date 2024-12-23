import React from "react";

function Navbar() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">RiskEvall</a>
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
              <a className="nav-link" href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus" onClick={(e) => handleScroll(e, "aboutus")}>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
