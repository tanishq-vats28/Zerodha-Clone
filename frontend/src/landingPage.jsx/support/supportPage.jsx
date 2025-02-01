import React from "react";
import Hero from "./hero";
import RaiseTicket from "./raiseTicket";
import "./support.css";
function SupportPage() {
  return (
    <div className="support-page">
      <Hero />
      <RaiseTicket />
    </div>
  );
}

export default SupportPage;
