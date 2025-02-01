import React from "react";
import SubRaise from "./subRaise";

function RaiseTicket() {
  return (
    <div className="raise-ticket py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="h3 text-center text-lg-start">
              To create a ticket, select a relevant topic
            </h2>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <SubRaise
              icon="fa-solid fa-plus"
              title="Account Opening"
              link={[
                "Getting started",
                "Online",
                "Offline",
                "Charges",
                "Company, Partnership and HUF",
                "Non Resident Indian (NRI)",
              ]}
            />
            <SubRaise
              icon="fa-regular fa-credit-card"
              title="Funds"
              link={[
                "Fund withdrawal",
                "Adding funds",
                "Adding bank accounts",
                "eMandates",
              ]}
            />
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <SubRaise
              icon="fa-regular fa-user"
              title="Your Zerodha Account"
              link={[
                "Login credentials",
                "Your Profile",
                "Account modification and segment addition",
                "CMR & DP ID",
                "Nomination",
                "Transfer and conversion of shares",
              ]}
            />
            <SubRaise
              icon="fa-regular fa-life-ring"
              title="Console"
              link={[
                "IPO",
                "Portfolio",
                "Funds statement",
                "Profile",
                "Reports",
                "Referral program",
              ]}
            />
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <SubRaise
              icon="fa-solid fa-chart-simple"
              title="Trading and Markets"
              link={[
                "Trading FAQs",
                "Kite",
                "Margins",
                "Product and order types",
                "Corporate actions",
                "Kite features",
              ]}
            />
            <SubRaise
              icon="fa-solid fa-coins"
              title="Coin"
              link={[
                "Understanding mutual funds and Coin",
                "Coin app",
                "Coin web",
                "Transactions and reports",
                "National Pension Scheme (NPS)",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;
