import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Holdings() {
  const [holdings, setHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHoldings = async () => {
    const URL = "https://zerodha-clone-6u0t.onrender.com/fetch/holdings";
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found. Please log in again.");
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
      } else {
        toast.error("Unexpected response from server.");
      }
    } catch (error) {
      console.error("Failed to fetch holdings. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHoldings();
  }, []);

  if (isLoading) {
    return <div className="container p-3">Loading holdings...</div>;
  }

  if (holdings.length === 0) {
    return (
      <div className="container p-3">
        <div className="row mt-3">
          <h4>No Holdings Yet</h4>
          <p>
            You currently have no investments. Start investing to track your
            holdings here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container p-3">
      <div className="row mt-3">
        <h4>Holdings ({holdings.length})</h4>
      </div>
      <hr />
      <div className="row p-3">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Avg Cost</th>
                <th scope="col">LTP</th>
                <th scope="col">Our Value</th>
                <th scope="col">P&L</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding, index) => {
                const ourValue = parseFloat(holding.ourValue) || 0;
                const pAndL = parseFloat(holding.pAndL) || 0;
                const profitLossClass =
                  pAndL >= 0 ? "text-success" : "text-danger";
                return (
                  <tr key={index}>
                    <td>{holding.name}</td>
                    <td>{holding.quantity}</td>
                    <td>{holding.avgCost}</td>
                    <td>
                      {isNaN(holding.ltp) ? "N/A" : holding.ltp.toFixed(2)}
                    </td>
                    <td>{isNaN(ourValue) ? "N/A" : ourValue.toFixed(2)}</td>
                    <td className={profitLossClass}>
                      {isNaN(pAndL) ? "N/A" : pAndL.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row p-3 mt-1">
        <div className="col-4">
          <h3>
            ₹
            {holdings
              .reduce(
                (total, holding) =>
                  total + (parseFloat(holding.totalInvestment) || 0),
                0
              )
              .toFixed(2)}
          </h3>
          <p>Total Investment</p>
        </div>
        <div className="col-4">
          <h3>
            ₹
            {holdings
              .reduce(
                (total, holding) => total + (parseFloat(holding.pAndL) || 0),
                0
              )
              .toFixed(2)}
          </h3>
          <p>Total P&L</p>
        </div>
      </div>
    </div>
  );
}

export default Holdings;
