import React from "react";
import "./css/openAccount.css";
function OpenAccount() {
  return (
    <div className="container">
      <div className="row open-acc">
        <h1>Open a Zerodha account</h1>
        <p className="mt-3 fs-6">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="btn btn-primary mt-3">Sign up now</button>
      </div>
    </div>
  );
}

export default OpenAccount;
