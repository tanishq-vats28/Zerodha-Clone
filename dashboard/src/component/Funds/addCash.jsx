import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AddCash({ fetchFunds }) {
  const [addCash, setAddCash] = useState("");

  const addCashUrl = "http://localhost:3002/funds/add";

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleAddCash = (e) => {
    const cash = parseFloat(e.target.value) || "";
    if (cash < 0) {
      handleError("Please enter a positive value");
    } else {
      setAddCash(cash);
    }
  };

  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        addCashUrl,
        { addCash },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.data.success) {
        handleSuccess(response.data.message);
        fetchFunds();
        setAddCash("");
      } else {
        handleError(response.data.message + " " + response.data.error);
      }
    } catch (error) {
      console.error("Error submitting cash:", error);
    }
  };

  return (
    <>
      <form className="needs-validation" onSubmit={handleSubmitAdd}>
        <div>
          <label htmlFor="validationCustom05" className="form-label">
            <h4>Add cash:</h4>
          </label>
          <br />
          <input
            type="number"
            className="form-control mt-1"
            id="validationCustom05"
            value={addCash}
            onChange={handleAddCash}
            required
          />
          <div className="invalid-feedback">Please provide a valid number.</div>
        </div>
        <br />
        <div>
          <button className="btn trans-btn" type="submit">
            ADD
          </button>
        </div>
      </form>
    </>
  );
}

export default AddCash;
