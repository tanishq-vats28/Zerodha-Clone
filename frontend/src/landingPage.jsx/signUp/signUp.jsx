import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./signup.css";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "https://zerodha-clone-6u0t.onrender.com/user/login";

    try {
      const { data } = await axios.post(
        url,
        { email, password },
        { withCredentials: true }
      );

      const { message, success } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "https://neon-concha-0e83fb.netlify.app/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("An error occurred. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row signup-container">
        <div className="col-12 col-md-7 text-center text-md-end pe-md-5 signup-hero">
          <img
            src="media/images/landing.46a77378.png"
            alt="landing"
            className="img-fluid signup-img"
          />
        </div>
        <div className="col-12 col-md-5 text-center text-md-start ps-md-5">
          <h2>Signup now</h2>
          <p
            style={{
              color: "rgb(0,0,0,.5)",
              fontSize: "16px",
            }}
          >
            Or track your existing application.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ">
                Email address
              </label>
              <input
                type="email"
                className="form-control inp-width"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control inp-width"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary signup-btn">
              Continue
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="signup-txt mt-4">
            <p>
              I authorise Zerodha to contact me even if my number is registered
              on DND. I authorise Zerodha to fetch my KYC information from the
              C-KYC registry with my PAN. Please visit this article to know
              more.
            </p>
            <p>
              If you are looking to open a HUF, Corporate, Partnership, or NRI
              account, you have to use the offline forms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
