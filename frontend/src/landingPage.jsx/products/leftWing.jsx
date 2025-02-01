import React from "react";

function LeftWing({ imgURL, title, description, URL }) {
  return (
    <section className="left-wing py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-8 order-lg-1 order-2 text-center">
            <img
              src={imgURL}
              alt={title}
              className="img-fluid"
              style={
                imgURL.includes("varsity-products") ? { maxWidth: "500px" } : {}
              }
            />
          </div>
          <div className="col-lg-4 order-lg-2 order-1">
            <div className="content">
              <h1 className="mb-4">{title}</h1>
              <p className="text-muted mb-4 fs-5">{description}</p>
              <div className="links">
                {URL.map((url) => (
                  <a
                    key={url}
                    href="/"
                    className="d-block mb-3 text-decoration-none text-primary"
                  >
                    {url} <i className="fa-solid fa-arrow-right"></i>
                  </a>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-3 app-badges">
                <a href="/">
                  <img
                    src="media/images/googlePlayBadge.svg"
                    alt="Google Play"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                </a>
                <a href="/">
                  <img
                    src="media/images/appstoreBadge.svg"
                    alt="App Store"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftWing;
