import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import "./dragform.css";
import { toast } from "react-toastify";
const OrderForm = ({ onClose, name, price: initialPrice, mode }) => {
  const formRef = useRef(null);
  const headerRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [formData, setFormData] = useState({ qty: 0, price: initialPrice });

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });
  useEffect(() => {
    const formElement = formRef.current;
    if (formElement) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const formWidth = formElement.offsetWidth;
      const formHeight = formElement.offsetHeight;

      setPosition({
        left: (viewportWidth - formWidth) / 2,
        top: (viewportHeight - formHeight) / 2,
      });
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e) => {
    if (e.target !== headerRef.current) return;

    const formElement = formRef.current;
    setOffset({
      x: e.clientX - formElement.getBoundingClientRect().left,
      y: e.clientY - formElement.getBoundingClientRect().top,
    });

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const formElement = formRef.current;
    formElement.style.left = `${e.clientX - offset.x}px`;
    formElement.style.top = `${e.clientY - offset.y}px`;
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleInputChange = (event) => {
    if (event.target.value < 0) {
      handleError("Please enter a positive value");
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(mode);
    let url = "";
    if (mode === "buy") {
      url = `https://zerodha-clone-6u0t.onrender.com/order/${mode}`;
    } else {
      url = `https://zerodha-clone-6u0t.onrender.com/order/${mode}`;
    }
    const { qty, price } = formData;
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found. Please log in again.");
        return;
      }
      const response = await axios.post(
        url,
        {
          name,
          qty,
          price,
          mode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        handleSuccess(response.data.message);
        setTimeout(() => {
          window.location.href = "https://neon-concha-0e83fb.netlify.app/";
        }, 100);
      } else {
        handleError(response.data.message);
      }
      onClose();
    } catch (error) {
      handleError(error.message);
      onClose();
    }
  };

  return (
    <div
      className="draggable-form"
      ref={formRef}
      style={{ left: `${position.left}px`, top: `${position.top}px` }}
    >
      <div className="header" ref={headerRef} onMouseDown={handleMouseDown}>
        <h6 className="heading">{name}</h6>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="form-content">
        <h5>{mode}</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="qty">Quantity:</label>
            <input
              type="number"
              className="form-control"
              id="qty"
              name="qty"
              value={formData.qty}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="order-btn">
            <button type="submit" className="btn btn-primary">
              {mode}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
