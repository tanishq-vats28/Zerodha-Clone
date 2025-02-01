import React from "react";

function SubRaise({ icon, title, link }) {
  return (
    <div className="sub-raise mb-5">
      <h5 className="mb-4">
        <a href="/" className="text-muted text-decoration-none">
          <i className={`${icon} me-2`}></i>
          {title}
        </a>
      </h5>

      <div className="d-flex flex-column gap-2">
        {link.map((item, index) => (
          <a
            key={index}
            href="/"
            className="text-decoration-none text-dark fs-6"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SubRaise;
