import React from "react";
import { Link } from "react-router-dom";
import "./css/hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="row homeHero">
        <img
          src="media/images/homeHero.png"
          alt="Home"
          className="hero-image"
        />
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
          <button className="btn btn-primary">Sign up now</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
