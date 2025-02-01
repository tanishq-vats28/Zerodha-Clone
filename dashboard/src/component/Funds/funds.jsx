import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import AddCash from "./addCash";
import WithdrawCash from "./withdrawCash";

function Funds() {
  const [availableCash, setAvailableCash] = useState();

  const fetchFunds = async () => {
    const URL = "https://zerodha-clone-6u0t.onrender.com/funds/fetch";
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
      if (response.data && response.data.data) {
        setAvailableCash(response.data.data.totalBalance);
      } else {
        toast.error("Unexpected response from server.");
      }
    } catch (error) {
      toast.error("Failed to fetch funds. Please try again.");
    }
  };

  useEffect(() => {
    fetchFunds();
  }, []);

  return (
    <div className="container">
      <div className="row funds-first-row">
        <div className="col-6 add-col">
          <AddCash fetchFunds={fetchFunds} />
        </div>
        <div className="col-6 withdraw-col">
          <WithdrawCash fetchFunds={fetchFunds} />
        </div>
      </div>
      <div className="row funds-second-row">
        <div className="col-12 text-center liquid-col">
          <p>
            Liquid funds <i className="fa-solid fa-money-bills"></i> :{" "}
            {availableCash !== undefined ? `₹ ${availableCash}` : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Funds;
