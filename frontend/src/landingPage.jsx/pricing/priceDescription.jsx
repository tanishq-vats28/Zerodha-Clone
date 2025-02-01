import React from "react";
import SubPricingDescription from "./subPricingDescription";

function PricingDescription() {
  return (
    <div className="container">
      <div className="row p-3 p-md-5 justify-content-center">
        <div className="col-12 col-md-4 mb-5 mb-md-0">
          <SubPricingDescription
            imgURL="media/images/pricing-eq.svg"
            title="Free equity delivery"
            description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
          />
        </div>
        <div className="col-12 col-md-4 mb-5 mb-md-0">
          <SubPricingDescription
            imgURL="media/images/other-trades.svg"
            title="Intraday and F&O trades"
            description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
          />
        </div>
        <div className="col-12 col-md-4">
          <SubPricingDescription
            imgURL="media/images/pricing-eq.svg"
            title="Free direct MF"
            description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
          />
        </div>
      </div>
    </div>
  );
}

export default PricingDescription;
