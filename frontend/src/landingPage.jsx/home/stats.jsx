import React from "react";
import "./css/stats.css";

function Stats() {
  return (
    <div className="container">
      <div className="row statsPage">
        <div className="col-md-4 offset-md-1">
          <h1>Trust with confidence</h1>
          <div className="stats-card">
            <h5>Customer-first always</h5>
            <p className="fs-5">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>
          <div className="stats-card">
            <h5>No spam or gimmicks</h5>
            <p className="fs-5">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div className="stats-card">
            <h5>The Zerodha universe</h5>
            <p className="fs-5">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="stats-card">
            <h5>Do better with money</h5>
            <p className="fs-5">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-md-7 stats-ecosystem">
          <img
            src="media/images/ecosystem.png"
            alt="ecosystem"
            className="img-fluid"
          />
          <div className="text-center mt-5">
            <a href="" className="fs-5">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="fs-5">
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="text-center">
          <img
            src="media/images/pressLogos.png"
            alt="press"
            className="img-fluid"
            style={{ width: "60%", marginTop: "4rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
