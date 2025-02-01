import React from "react";
import "./css/pricing.css";

function Pricing() {
  return (
    <div className="container">
      <div className="row home-pricing">
        <div className="col-md-5">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p className="fs-5">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="fs-5">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-md-7">
          <div className="row">
            <div className="col p-3 border text-center">
              <h1>₹0</h1>
              <p>
                Free account
                <br />
                opening
              </p>
            </div>
            <div className="col p-3 border text-center">
              <h1>₹0</h1>
              <p>
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>
            <div className="col p-3 border text-center">
              <h1>₹20</h1>
              <p>
                Intraday and <br />
                F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
