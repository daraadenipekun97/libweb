import React from "react";
import "./loginPage.css";
import { Navbar } from "../../containers";
import { toast } from "react-toastify";

const LoginPage = () => {
  const notify = () => toast.success("Wow so easy!");

  return (
    <>
      <Navbar />

      <div className="lib-login-container">
        <div class="lib-login-wrapper">
          <h1>Sign In</h1>
          <div className="lib-login-form" style={{ textAlign: "center" }}>
            <div className="lib-login-input-group">
              <input type="text" placeholder="Email*" className="lib-login-email" />
              <p className="login-validation-error-text">Error! must not be empty</p>
              <input type="password" placeholder="Password*" className="lib-login-password" />
              <p className="login-validation-error-text">Error</p>
            </div>

            <div className="lib-login-input-group" id="btn-group">
              <button disabled={false} onClick={notify}>
                Login
              </button>
            </div>

            <br />

            <a href="forgot" className="login-forgot-password">
              Forgot Password?
            </a>

            <br />

            <br />

            <hr />

            <br />

            <p className="lib-login-p-tag">Or</p>

            <button className="login-with-google-btn">Sign in with Google</button>

            <p className="lib-login-p-tag">
              Dont have an account then ? <a href="register">Sign up Here</a>
            </p>
          </div>
        </div>

        <div class="login-area">
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

export default LoginPage;
