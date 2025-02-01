import React from "react";

function SubPricingDescription(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <img
          src={props.imgURL}
          alt=""
          className="img-fluid"
          style={{ height: "10rem", width: "auto" }}
        />
      </div>
      <div className="row text-center text-md-start mt-3">
        <h2 className="h4">{props.title}</h2>
        <p className="mt-2 fs-6">{props.description}</p>
      </div>
    </div>
  );
}

export default SubPricingDescription;
