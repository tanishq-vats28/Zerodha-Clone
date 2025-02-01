import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row text-center mt-5">
        <h1>People</h1>
      </div>
      <div className="row py-5 px-lg-5">
        <div className="col-12 col-md-6 text-center mb-5 mb-md-0">
          <img
            src="media/images/Tanishq1.jpg"
            alt="developer"
            className="img-fluid rounded-circle w-75 w-md-50"
          />
          <h4 className="mt-4">Tanishq Vats</h4>
          <p className="text-muted">CSE Student</p>
        </div>
        <div className="col-12 col-md-6 fs-5 d-flex align-items-center">
          <div>
            <p>
              My name is Tanishq Vats, and I'm currently pursuing a Bachelor of
              Technology in Computer Science at Jaypee Institute of Information
              Technology, Noida. To sharpen my programming skills, I developed
              this full-stack web application using the MERN stack, designed to
              manage stock exchanges.
            </p>
            <p>
              Drawing inspiration from Zerodha Broking Ltd., I explored the
              workings of a stock brokerage application to guide this project.
            </p>
            <p className="d-flex flex-wrap gap-3">
              Connect on
              <a
                href="https://www.linkedin.com/in/tanishq-vats-a76715253/"
                className="text-decoration-none me-3"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/tanishq-vats28"
                className="text-decoration-none"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
