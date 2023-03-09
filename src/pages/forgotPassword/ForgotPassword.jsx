import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./forgotPassword.css";
import { Navbar } from "../../containers";
import { forgotPassword, restoreForgotPasswordInitial } from "../../Actions";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ForgotPassword = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { forgotPasswordSuccess, forgotPasswordFailure } = useSelector((state) => state.auth);

  const [valid, setValid] = useState(false);

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const hanldeSwal = () => {
    Swal.fire({
      title: "Please Logout",
      icon: "warning",
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonText: "Ok",
      denyButtonText: `Don't save`,
      confirmButtonColor: "#5e458b",
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/home/dashboard");
      }
      // else if (result.isDenied) {
      //   Swal.fire('Changes are not saved', '', 'info')
      // }
    });
  };

  useEffect(() => {
    if (user && location.pathname === "/forgot") {
      hanldeSwal();
    }
  });

  const initialFormState = {
    buttonState: false,
    buttonText: "Send",
    spinner: false,
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  const initialFormValues = {
    email: "",
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

  const handleSubmit = () => {
    if (formValues.email !== "") {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText: "Send",
        spinner: true,
      });

      setValid(true);
    } else {
      setFocused(true);
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        forgotPassword({
          email: formValues.email,
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    if (forgotPasswordFailure) {
      setFormState({ ...initialFormState });
      // setFormValues({...initialFormValues})
    }

    return () => {
      dispatch(restoreForgotPasswordInitial());
    };
  }, [forgotPasswordFailure]);

  useEffect(() => {
    if (forgotPasswordSuccess) {
      navigate("/reset");
    }

    return () => {
      dispatch(restoreForgotPasswordInitial());
    };
  }, [forgotPasswordSuccess]);

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <>
      <Navbar />

      <div className="lib-forgot-container">
        <div className="lib-forgot-wrapper">
          <h1>Forgot Password</h1>
          <p className="info-text">
            Enter the email you used to sign up and we will send you a link to reset your password
          </p>
          <br />
          <div className="lib-forgot-form" style={{ textAlign: "center" }}>
            <div className="lib-forgot-input-group">
              <input
                type="email"
                placeholder="Email*"
                className="lib-forgot-email"
                value={formValues.email}
                required
                pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                onBlur={() => handleFocus()}
                focused={focused.toString()}
                onChange={(e) => emailHandler(e)}
              />
              <p className="forgot-validation-error-text">Please input your email</p>
            </div>

            <div className="lib-forgot-input-group" id="btn-group">
              <button disabled={formState.buttonState} onClick={() => handleSubmit()}>
                {formState.spinner === true ? <Spinner /> : formState.buttonText}
              </button>
            </div>

            <br />

            <br />

            <hr />

            <br />

            <p>Or</p>

            <br />
            <p style={{ color: "#5e458b" }}>
              Dont have an account?{" "}
              <span onClick={handleSignup} className="signup_link">
                Sign up
              </span>
            </p>
          </div>
        </div>

        <div className="forgot-area">
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

export default ForgotPassword;
