import React from "react";
import Hero from "./hero";
import Brokerage from "./brokerage";
import PricingDescription from "./priceDescription";
import OpenAccount from "../openAccount";
import "./pricing.css";
function PricingPage() {
  return (
    <>
      <Hero />
      <PricingDescription />
      <OpenAccount />
      <Brokerage />
    </>
  );
}

export default PricingPage;
