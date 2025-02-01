import React from "react";
import "./css/education.css";
function Education() {
  return (
    <div className="container">
      <div className="row home-education">
        <div className="col-md-6">
          <img
            src="media/images/education.svg"
            alt="index-education"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 mt-3">
          <h3>Free and open market education</h3>
          <div>
            <p className="fs-5 mt-4">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" className="fs-5 mt-4">
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <p className="fs-5 mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" className="fs-5 mt-4">
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
