import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./loginPage.css";
import { Navbar } from "../../containers";
import {
  userLogin,
  restoreUserLoginInitial,
  googleLogin,
  restoreGoogleLoginSuccessInitial,
} from "../../Actions";

import Spinner from "../../components/spinner/Spinner";
import { useNavigate, useLocation } from "react-router-dom";

import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const LoginPage = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loginSuccess, loginFailure, googleLoginSuccess, googleLoginFailure } = useSelector(
    (state) => state.auth
  );

  const [valid, setValid] = useState(false);
  const [googleLoginStatus, setGoogleLoginStatus] = useState(false);

  useEffect(() => {
    if (user && location.pathname === "/signin") {
      navigate("/home/dashboard");
    }
  });

  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });

  const handleFocus = (e) => {
    if (e.target.name === "email") {
      setFocused({ ...focused, email: true });
    } else if (e.target.name === "password") {
      setFocused({ ...focused, password: true });
    }
  };

  const [passwordShow, setPasswordShow] = useState(false);

  const handlePasswordShow = () => {
    setPasswordShow(true);
  };

  const handlePasswordHide = () => {
    setPasswordShow(false);
  };

  // const clientId = '893028334475-6o02i3mott60lp08b9tugapak12j6hr7.apps.googleusercontent.com'

  const clientId = "218460719300-c7mfmeul7tjt7fhrosljpni5kmmmeobd.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "profile email",
      });
    };
    gapi.load("client:auth2", initClient);

    //    gapi.load('client:auth2', function() {
    //     debugger
    //     const auth2 = gapi.client.init({
    //       clientId: clientId,
    //       scope: 'profile email'
    //     })
    //       const googleBtn = document.getElementById('google-btn')
    //       auth2.attachClickHandler(googleBtn, {}, onSuccess, onFailure);
    //  });
  });

  const onSuccess = (res) => {
    debugger;
    console.log("success:", res);
    dispatch(
      googleLogin({
        name: res.profileObj.name,
        email: res.profileObj.email,
        uid: res.profileObj.googleId,
        photo_url: res.profileObj.imageUrl,
        device: "web",
        country_id: "",
      })
    );

    // setGoogleLoginStatus(true)
  };
  const onFailure = (err) => {
    console.log("failed:", err);
  };

  useEffect(() => {
    debugger;
    if (googleLoginSuccess) {
      navigate("/home/dashboard");
      window.location.reload();
    }

    return () => {
      // setGoogleLoginStatus(false)
      dispatch(restoreGoogleLoginSuccessInitial());
    };
  }, [googleLoginSuccess]);

  const initialFormState = {
    buttonState: false,
    buttonText: "Login",
    spinner: false,
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  const initialFormValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const emailHandler = (e) => {
    if (e) {
      let emailValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        email: emailValue,
      });
    } else {
      setFormValues({
        ...formValues,
        email: "",
      });
    }
  };

  const passwordHandler = (e) => {
    if (e) {
      let passwordValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        password: passwordValue,
      });
    } else {
      setFormValues({
        ...formValues,
        password: "",
      });
    }
  };

  const handleLogin = () => {
    if (formValues.email !== "" && formValues.password !== "") {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText: "Register",
        spinner: true,
      });

      setValid(true);
    } else {
      setFocused({
        ...focused,
        email: true,
        password: true,
      });
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        userLogin({
          email: formValues.email,
          password: formValues.password,
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    if (loginSuccess) {
      navigate("/home/dashboard");
      window.location.reload();
    }

    return () => {
      dispatch(restoreUserLoginInitial());
    };
  }, [loginSuccess]);

  useEffect(() => {
    if (loginFailure) {
      setFormState({
        ...formState,
        buttonState: false,
        buttonText: "Login",
        spinner: false,
      });
    }

    return () => {
      dispatch(restoreUserLoginInitial());
    };
  }, [loginFailure]);

  return (
    <>
      <Navbar />

      <div className="lib-login-container">
        <div className="lib-login-wrapper">
          <h1>Sign In</h1>
          <div className="lib-login-form" style={{ textAlign: "center" }}>
            <div className="lib-login-input-group">
              <input
                name="email"
                type="email"
                placeholder="Email*"
                className="lib-login-email"
                required
                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                onBlur={(e) => handleFocus(e)}
                focused={focused.email.toString()}
                onChange={(e) => emailHandler(e)}
              />
              <p className="login-validation-error-text">Please input a valid email</p>
              <input
                name="password"
                type={passwordShow ? "text" : "password"}
                placeholder="Password*"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$"
                className="lib-login-password"
                required
                onBlur={(e) => handleFocus(e)}
                focused={focused.password.toString()}
                onChange={(e) => passwordHandler(e)}
              />
              {passwordShow ? (
                <i className="fa fa-eye-slash toggle-pass" onClick={() => handlePasswordHide()}></i>
              ) : (
                <i className="fa fa-eye toggle-pass" onClick={() => handlePasswordShow()}></i>
              )}
              <p className="login-validation-error-text">Please input a valid password</p>
            </div>

            <div className="lib-login-input-group" id="btn-group">
              <button disabled={formState.buttonState} onClick={() => handleLogin()}>
                {formState.spinner === true ? <Spinner /> : formState.buttonText}
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

            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <button
                  className="login-with-google-btn"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign in with Google
                </button>
              )}
              buttonText="Sign in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />

            <p className="lib-login-p-tag">
              Dont have an account? <a href="register">Sign up</a>
            </p>
          </div>
        </div>

        <div className="login-area">
          <ul className="circles">
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
