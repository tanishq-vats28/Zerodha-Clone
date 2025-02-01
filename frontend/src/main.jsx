import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./responsiveIndex.css";
import HomePage from "./landingPage.jsx/home/homePage";
import SignUp from "./landingPage.jsx/signUp/signUp";
import AboutPage from "./landingPage.jsx/about/aboutPage";
import ProductPage from "./landingPage.jsx/products/productPage";
import PricingPage from "./landingPage.jsx/pricing/pricingPage";
import SupportPage from "./landingPage.jsx/support/supportPage";
import Navbar from "./landingPage.jsx/navbar";
import Footer from "./landingPage.jsx/footer";
import InvalidPath from "./landingPage.jsx/invalidPath";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<InvalidPath />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
