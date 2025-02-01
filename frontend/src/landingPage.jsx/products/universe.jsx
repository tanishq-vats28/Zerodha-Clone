import React from "react";

function Universe() {
  const partners = [
    {
      img: "media/images/zerodhaFundhouse.png",
      text: "Our asset management venture that is creating simple and transparent index funds...",
    },
    {
      img: "media/images/streakLogo.png",
      text: "Systematic trading platform that allows you to create and backtest strategies...",
    },
    {
      img: "media/images/sensibull-logo.svg",
      text: "Options trading platform that lets you create strategies, analyze positions...",
    },
    {
      img: "media/images/smallcase-logo.png",
      text: "Thematic investing platform that helps you invest in diversified baskets...",
    },
    {
      img: "media/images/tijori.svg",
      text: "Investment research platform that offers detailed insights on stocks...",
    },
    {
      img: "media/images/ditto-logo.png",
      text: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <section className="universe py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="lead mb-4">
            Want to know more about our technology stack? Check out the{" "}
            <a href="/" className="text-decoration-none text-primary">
              Zerodha.tech
            </a>{" "}
            blog.
          </p>
        </div>

        <div className="text-center mb-5">
          <h1 className="mb-3">The Zerodha Universe</h1>
          <p className="text-muted lead">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-5">
          {partners.map((partner, index) => (
            <div className="col" key={index}>
              <div className="h-100 p-4">
                <img
                  src={partner.img}
                  alt="Partner"
                  className="img-fluid mb-3"
                  style={{ maxHeight: "50px" }}
                />
                <p className="text-muted">{partner.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn btn-primary btn-lg px-5">Sign up now</button>
        </div>
      </div>
    </section>
  );
}

export default Universe;
