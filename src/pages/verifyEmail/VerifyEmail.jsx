import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./verifyEmail.css";
import { Navbar } from "../../containers";
import Spinner from "../../components/spinner/Spinner";
import { AiFillWarning } from "react-icons/ai";

import {
  verifyUserEmail,
  restoreVerifyUserEmailInitial,
  resendMail,
  restoreResendMailInitial,
  fetchProfile,
} from "../../Actions";
import Swal from "sweetalert2";
import UserNavbar from "../../components/userNavbar/UserNavbar";

const VerifyEmail = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(false);

  const { verifyUserFailure, verifyUserSuccess, resendMailSuccess, resendMailFailure } =
    useSelector((state) => state.auth);

  const { profileData } = useSelector((state) => state.profile);

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
    dispatch(fetchProfile());
  }, [dispatch]);

  // useEffect(() => {
  //   debugger
  //   if (profileData.email_verified_at === null && location.pathname === "/verify") {
  //     navigate("/home/dashboard");
  //   }

  // }, [profileData])

  const handleFocus = (e) => {
    setFocused(true);
  };

  const initialFormState = {
    buttonState: false,
    buttonText: "Send",
    spinner: false,
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  const initialFormValues = {
    code: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const codeHandler = (e) => {
    if (e) {
      let codeValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        code: codeValue,
      });
    } else {
      setFormValues({
        ...formValues,
        code: "",
      });
    }
  };

  const handleSubmit = () => {
    if (formValues.code !== "") {
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
        verifyUserEmail({
          code: formValues.code,
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    if (verifyUserFailure === true) {
      setFormState({
        ...formState,
        buttonState: false,
        buttonText: "Send",
        spinner: false,
      });
    }

    return () => {
      dispatch(restoreVerifyUserEmailInitial());
    };
  }, [verifyUserFailure]);

  const handleSwal = () => {
    Swal.fire({
      title: "Please Login again",
      icon: "success",
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonText: "Okay",
      denyButtonText: `Don't save`,
      confirmButtonColor: "#5e458b",
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/signin");
      }
      // else if (result.isDenied) {
      //   Swal.fire('Changes are not saved', '', 'info')
      // }
    });
  };

  useEffect(() => {
    if (verifyUserSuccess === true) {
      setFormState({
        ...formState,
        buttonState: false,
        buttonText: "Send",
        spinner: false,
      });

      setFormValues({
        ...formValues,
        code: "",
      });

      navigate("/home/dashboard");
    }

    return () => {
      dispatch(restoreVerifyUserEmailInitial());
    };
  }, [verifyUserSuccess]);

  //resend mail part Click here to resend

  const resendButtonState = {
    buttonState: false,
    buttonText: "Resend Token",
  };

  const [resendBtnState, setResendBtnState] = useState({ ...resendButtonState });

  const handleResendMail = () => {
    setResendBtnState({
      ...resendBtnState,
      buttonState: true,
      buttonText: "Sending...",
    });

    dispatch(resendMail());
  };

  useEffect(() => {
    if (resendMailSuccess === true) {
      setResendBtnState({
        ...resendBtnState,
        buttonState: false,
        buttonText: "Resend Mail",
      });
    }

    return () => {
      dispatch(restoreResendMailInitial());
    };
  }, [resendMailSuccess]);

  useEffect(() => {
    if (resendMailFailure === true) {
      setResendBtnState({
        ...resendBtnState,
        buttonState: false,
        buttonText: "Resend Mail",
      });
    }

    return () => {
      dispatch(restoreResendMailInitial());
    };
  }, [resendMailFailure]);

  return (
    <>
      {/* {user ? <UserNavbar /> : <Navbar />} */}

      <div className="lib-verify-container">
        <div className="lib-verify-wrapper">
          <h1>Verify Email</h1>
          <p className="info-text">Enter the token sent to your email address</p>
          <br />
          <div className="lib-verify-form" style={{ textAlign: "center" }}>
            <div className="lib-verify-input-group">
              <input
                type="text"
                placeholder="Token*"
                className="lib-verify-email"
                required
                onBlur={handleFocus}
                focused={focused.toString()}
                onChange={(e) => codeHandler(e)}
              />
              <p className="verify-validation-error-text">This field is required</p>
            </div>

            <div className="lib-verify-input-group" id="btn-group">
              <button disabled={formState.buttonState} onClick={() => handleSubmit()}>
                {formState.spinner === true ? <Spinner /> : formState.buttonText}
              </button>
            </div>
            <br />

            <p className="lib-verify-p-tag">
              Didnt get mail? &nbsp;
              <button disabled={resendBtnState.buttonState} onClick={() => handleResendMail()}>
                {resendBtnState.buttonText}
              </button>
            </p>
            <div className="verification-warning">
              <AiFillWarning color="#EED202" size={30} />
              <p className="warning-text">
                Please check your spam folders for verification code
              </p>
            </div>
          </div>
        </div>

        <div className="verify-area">
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

export default VerifyEmail;
