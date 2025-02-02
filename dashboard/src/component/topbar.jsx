import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Topbar() {
  const generateRandomValue = () => (Math.random() * 5).toFixed(2);
  const [niftyValue, setNiftyValue] = useState(generateRandomValue());
  const [sensexValue, setSensexValue] = useState(generateRandomValue());

  useEffect(() => {
    const interval = setInterval(() => {
      setNiftyValue(generateRandomValue());
      setSensexValue(generateRandomValue());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    try {
      const url = "https://zerodha-clone-6u0t.onrender.com/user/logout";
      const response = await axios.post(url);
      if (response.data.success) {
        localStorage.removeItem("token");
        window.location.href = "https://neon-concha-0e83fb.netlify.app/";
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  return (
    <div className="topbar-container">
      <div className="options">
        <div className="broker">
          <p className="index">NIFTY50</p>
          <p className="index-point">{niftyValue}</p>
        </div>
        <div className="broker">
          <p className="index">SENSEX</p>
          <p className="index-point">{sensexValue}</p>
        </div>
      </div>
      <Navbar expand="lg" className="navbar" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img
              src="media/unnamed-removebg-preview-1-1.png"
              alt="Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex-column flex-lg-row gap-2 gap-lg-0">
              <Nav.Link as={Link} to="/" className="nav-link">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/orders" className="nav-link">
                Orders
              </Nav.Link>
              <Nav.Link as={Link} to="/holdings" className="nav-link">
                Holdings
              </Nav.Link>
              <Nav.Link as={Link} to="/funds" className="nav-link">
                Funds
              </Nav.Link>
              <Nav.Link onClick={handleLogout} className="nav-link">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Topbar;
