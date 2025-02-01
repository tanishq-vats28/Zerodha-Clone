import React from "react";
import { Link } from "react-router-dom";
import "./css/navbar.css";

function Navbar() {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      new window.bootstrap.Collapse(navbarCollapse).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary nav-contain">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={closeNavbar}
        >
          <img src="media/images/logo.svg" alt="logo" className="nav-logo" />
        </Link>

        <button
          className="navbar-toggler d-lg-none"
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
              <Link className="nav-link" to="/signup" onClick={closeNavbar}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={closeNavbar}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing" onClick={closeNavbar}>
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support" onClick={closeNavbar}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
