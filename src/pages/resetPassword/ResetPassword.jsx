import React from "react";
import { Navbar } from "../../containers";
import "./resetPassword.css";

const ResetPassword = () => {
  return (
    <>
      <Navbar />

      <div className="lib-login-container">
        <div class="lib-login-wrapper">
          <h1>Reset Password</h1>
          <br />
          <form className="lib-login-form" style={{ textAlign: "center" }}>

          <div className="lib-login-input-group">
              <input type="email" placeholder="Email*" className="lib-login-email" value = "dara@gmail.com" />
              <p className="login-validation-error-text">Error! must not be empty</p>
          </div>

            <div className="lib-login-input-group">
              <input type="email" placeholder="Email*" className="lib-login-email" />
              <p className="login-validation-error-text">Error! must not be empty</p>
            </div>

            <div className="lib-login-input-group">
              <input type="email" placeholder="Confirm Email*" className="lib-login-email" />
              <p className="login-validation-error-text">Error! must not be empty</p>
            </div>

            <div className="lib-login-input-group" id="btn-group">
              <button disabled={false}>Reset</button>
            </div>

            <br />

            <br />

            <hr />

            <br />

            <p style={{ color: "#5e458b" }}>
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

export default ResetPassword;
