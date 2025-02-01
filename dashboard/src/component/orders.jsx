import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const URL = "https://zerodha-clone-6u0t.onrender.com/fetch/orders";
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
      if (response.data && response.data.orders) {
        setOrders(response.data.orders.slice(0, 10));
      } else {
        toast.error("Unexpected response from server.");
      }
    } catch (error) {
      toast.error("Failed to fetch orders. Please try again.");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container p-3">
      <div className="row mt-3">
        <h4>Previous orders ({orders.length})</h4>
      </div>
      <hr />
      <div className="row p-3 text-center">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price (₹)</th>
              <th scope="col">Qty</th>
              <th scope="col">Mode</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.price}</td>
                  <td>{stock.quantity}</td>
                  <td>{stock.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
