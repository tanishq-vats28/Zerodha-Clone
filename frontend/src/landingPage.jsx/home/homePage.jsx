import React from "react";
import Hero from "./hero";
import Stats from "./stats";
import Pricing from "./pricing";
import Education from "./education";
import OpenAccount from "../openAccount";
function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
