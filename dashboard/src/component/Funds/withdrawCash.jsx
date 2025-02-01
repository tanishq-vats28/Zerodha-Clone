import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function WithdrawCash({ fetchFunds }) {
  const [withdrawCash, setWithdrawCash] = useState("");

  const withdrawCashUrl = "http://localhost:3002/funds/withdraw";

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleWithdrawCash = (e) => {
    const cash = parseFloat(e.target.value) || "";
    if (cash < 0) {
      handleError("Please enter a positive value");
    } else {
      setWithdrawCash(cash);
    }
  };

  const handleSubmitWithdraw = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        withdrawCashUrl,
        { withdrawCash },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        handleSuccess(response.data.message);
        fetchFunds();
        setWithdrawCash("");
      } else {
        handleError(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        handleError(error.response.data.message);
      } else {
        handleError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <form className="needs-validation" onSubmit={handleSubmitWithdraw}>
        <div>
          <label htmlFor="validationCustom06" className="form-label">
            <h4>Withdraw cash:</h4>
          </label>
          <br />
          <input
            type="number"
            className="form-control mt-1"
            id="validationCustom06"
            value={withdrawCash}
            onChange={handleWithdrawCash}
            required
          />
          <div className="invalid-feedback">Please provide a valid number.</div>
        </div>
        <br />
        <div>
          <button className="btn trans-btn" type="submit">
            WITHDRAW
          </button>
        </div>
      </form>
    </>
  );
}

export default WithdrawCash;
