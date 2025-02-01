import React, { useState, useEffect } from "react";
import axios from "axios";

function Summary() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      const URL = "https://zerodha-clone-6u0t.onrender.com/fetch/holdings";
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        const response = await axios.post(
          URL,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data) {
          setHoldings(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch holdings. Please try again.");
      }
    };

    fetchHoldings();
  }, []);

  const totalInvestment = holdings.reduce(
    (total, holding) => total + (parseFloat(holding.totalInvestment) || 0),
    0
  );

  const totalPL = holdings.reduce(
    (total, holding) => total + (parseFloat(holding.pAndL) || 0),
    0
  );

  const totalCurrentValue = holdings.reduce(
    (total, holding) => total + (parseFloat(holding.ourValue) || 0),
    0
  );

  const totalNetChange = holdings.reduce(
    (total, holding) => total + (parseFloat(holding.netChange) || 0),
    0
  );

  const plPercentage =
    totalInvestment > 0 ? ((totalPL / totalInvestment) * 100).toFixed(2) : 0;

  return (
    <div className="summary-container">
      <div className="summary-headline mb-1 mt-5">
        <h4>Hi, User!</h4>
      </div>
      <hr />
      <h6>
        <i className="fa-solid fa-credit-card"></i> Holdings ({holdings.length})
      </h6>
      <div className="row pt-2 give-margin text-center">
        <div className="col-4 summary-col p-3 ">
          <div
            className={`holdings-value ${
              totalPL >= 0 ? "text-success" : "text-danger"
            }`}
          >
            <h1>₹{(totalPL / 1000).toFixed(2)}k</h1>
          </div>
          <p className="summary-col-p mt-1">P&L</p>
        </div>
        <div className="col-4 p-3 text-left summary-second-col">
          <p>Current value ₹{(totalCurrentValue / 1000).toFixed(2)}k</p>
          <p>Investment ₹{(totalInvestment / 1000).toFixed(2)}k</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
