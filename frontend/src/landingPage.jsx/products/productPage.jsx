import React from "react";
import Hero from "./hero";
import LeftWing from "./leftWing";
import RightWing from "./rightWing";
import Universe from "./universe";
import "./productPage.css";
function ProductPage() {
  return (
    <div className="product-page">
      <Hero />
      <LeftWing
        imgURL="media/images/products-kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        URL={["Try demo", "Learn more"]}
      />
      <RightWing
        imgURL="media/images/products-console.png"
        title="Consol"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        URL={["Learn more"]}
      />
      <LeftWing
        imgURL="media/images/products-coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        URL={["Coin"]}
      />
      <RightWing
        imgURL="media/images/products-console.png"
        title="Kite connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        URL={["Kite connect"]}
      />
      <LeftWing
        imgURL="media/images/varsity-products.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        URL={[]}
      />
      <Universe />
    </div>
  );
}

export default ProductPage;
