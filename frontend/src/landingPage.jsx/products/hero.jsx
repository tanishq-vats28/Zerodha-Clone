import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="container text-center border-bottom py-md-5 py-4">
        <h1 className="display-4 mb-3">Technology</h1>
        <p className="lead mb-4">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="mb-0">
          Check out our{" "}
          <a href="/" className="text-decoration-none text-primary">
            investment offerings&nbsp;
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </section>
  );
}

export default Hero;
