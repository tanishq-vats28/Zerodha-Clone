import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row text-start mt-5 mb-3 mx-3">
        <h3 className="h5">
          <a href="">Brokerage calculator</a>
        </h3>
      </div>
      <div className="row mx-3 fs-6 text-muted">
        <ul className="list-unstyled">
          <li className="mb-3">
            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST
            per order.
          </li>
          <li className="mb-3">
            Digital contract notes will be sent via e-mail.
          </li>
          <li className="mb-3">
            Physical copies of contract notes, if required, shall be charged ₹20
            per contract note. Courier charges apply.
          </li>
          <li className="mb-3">
            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
            equity (whichever is lower).
          </li>
          <li className="mb-3">
            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </li>
          <li>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Brokerage;
