import React from "react";
import "./forgotPassword.css";
import { Navbar } from "../../containers";

const ForgotPassword = () => {
  return (
    <>
      <Navbar />

      <div className="lib-login-container">
        <div class="lib-login-wrapper">
          <h1>Forgot Password</h1>
          <p className="info-text">
            Enter the email you used to sign up and we will send you a link to reset your password
          </p>
          <br />
          <form className="lib-login-form" style={{ textAlign: "center" }}>
            <div className="lib-login-input-group">
              <input type="email" placeholder="Email*" className="lib-login-email" />
              <p className="login-validation-error-text">Error! must not be empty</p>
            </div>

            <div className="lib-login-input-group" id="btn-group">
              <button disabled={false}>Send</button>
            </div>

            <br />

            <br />

            <hr />

            <br />

            <p>Or</p>

            <br />
            <p>
              Dont have an account then ? <a href="register">Sign up Here</a>
            </p>
          </form>
        </div>

        <div class="forgot-area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
