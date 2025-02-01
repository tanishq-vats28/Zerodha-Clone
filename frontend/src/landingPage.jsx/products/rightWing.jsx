import React from "react";

function RightWing({ imgURL, title, description, URL }) {
  return (
    <section className="right-wing py-5 bg-light">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-4">
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
            </div>
          </div>
          <div className="col-lg-8 text-center">
            <img
              src={imgURL}
              alt={title}
              className="img-fluid"
              style={{ maxWidth: "600px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightWing;
