import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Summary from "./summary";
import Funds from "./Funds/funds";
import Holdings from "./holdings";
import Orders from "./orders";
import { fetchStocks } from "./data/data";
import Watchist from "./watchlist";
import Error from "./error";
function Dashboard() {
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStocks = async () => {
      try {
        const stock = await fetchStocks();
        setWatchlist(stock);
      } catch (error) {
        console.error("Error fetching stocks:", error);
        setWatchlist([]);
      } finally {
        setLoading(false);
      }
    };

    getStocks();

    const interval = setInterval(getStocks, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="watchlist">
        <div className="info-box">
          <p>Search eg: infy, bse, nifty fut weekly, gold mcx</p>
          <span>({watchlist.length}/50)</span>
        </div>
        <ul className="watchlist-box">
          {watchlist.map((stock, index) => (
            <Watchist stock={stock} key={index} />
          ))}
        </ul>
      </div>
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
