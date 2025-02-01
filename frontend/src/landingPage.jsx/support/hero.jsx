import React from "react";

function Hero() {
  return (
    <div className="hero-section bg-primary text-white py-5 px-lg-10 px-3 mb-lg-5 mb-3">
      <div className="container">
        <div className="row g-3 mb-4">
          <div className="col-md-6 text-start">
            <a href="/" className="h4 text-white text-decoration-none">
              Support Portal
            </a>
          </div>
          <div className="col-md-6 text-end">
            <a
              href="/track"
              className="h6 text-white text-decoration-underline"
            >
              Track tickets
            </a>
          </div>
        </div>

        <div className="row mt-lg-5 mt-3">
          <div className="col-lg-7 order-lg-1 order-2">
            <p className="h4 mb-4">
              Search for an answer or browse help topics to create a ticket
            </p>

            <div className="position-relative mb-4">
              <input
                type="search"
                className="form-control form-control-lg pe-5"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
              />
              {/* Added responsive visibility classes */}
              <span
                className="d-none d-lg-block"
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "gray", fontSize: "1.2rem" }}
                ></i>
              </span>
            </div>

            <div className="support-links d-flex flex-wrap gap-3 mb-lg-0 mb-4">
              <a
                href="/track-account"
                className="text-white text-decoration-none"
              >
                Track account opening
              </a>
              <a
                href="/track-segment"
                className="text-white text-decoration-none"
              >
                Track segment activation
              </a>
              <a href="/intraday" className="text-white text-decoration-none">
                Intraday margins
              </a>
              <a href="/kite" className="text-white text-decoration-none">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-lg-5 ps-lg-5 order-lg-2 order-1 mb-lg-0 mb-4">
            <h4>Featured</h4>
            <div className="mt-3">
              <p>
                <a
                  href="/surveillance"
                  className="text-white text-decoration-underline"
                >
                  1. Surveillance measure on scrips - August 2024
                </a>
              </p>
              <p>
                <a
                  href="/intraday-leverages"
                  className="text-white text-decoration-underline"
                >
                  2. Latest Intraday leverages and Square-off timings
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
