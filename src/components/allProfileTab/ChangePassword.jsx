import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePassword, restoreChangePasswordInitial } from "../../Actions";
import Spinner from "../spinner/Spinner";
import "./css/changePassword.css";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const { passwordChangeFailure, passwordChangeSuccess } = useSelector((state) => state.profile);

  const [valid, setValid] = useState(false);

  const [showPasswordDesc, setShowPasswordDesc] = useState(false);
  const [passwordMatchCheck, setPasswordMatchCheck] = useState(false);

  const [focused, setFocused] = useState({
    oldPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const handleFocus = (e) => {
    setShowPasswordDesc(false);
    if (e.target.name === "oldPassword") {
      setFocused({ ...focused, oldPassword: true });
    } else if (e.target.name === "newPassword") {
      setFocused({ ...focused, newPassword: true });
    } else if (e.target.name === "confirmNewPassword") {
      setFocused({ ...focused, confirmNewPassword: true });
    }
  };

  const [passwordShow, setPasswordShow] = useState(false);

  const handlePasswordShow = () => {
    setPasswordShow(true);
  };

  const handlePasswordHide = () => {
    setPasswordShow(false);
  };

  const initialFormState = {
    buttonState: false,
    buttonText: "Update",
    spinner: false,
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  const initialFormValues = {
    current_password: "",
    password: "",

    //not been sent to API
    confirmPassword: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const oldPasswordHandler = (e) => {
    if (e) {
      let passwordVal = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        current_password: passwordVal,
      });
    } else {
      setFormValues({
        ...formValues,
        current_password: "",
      });
    }
  };

  const passwordHandler = (e) => {
    setPasswordMatchCheck(false);

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

  const confirmPasswordHandler = (e) => {
    setPasswordMatchCheck(false);
    if (e) {
      let passwordValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        confirmPassword: passwordValue,
      });
    } else {
      setFormValues({
        ...formValues,
        confirmPassword: "",
      });
    }
  };

  const handleSubmit = () => {
    if (
      formValues.current_password !== "" &&
      formValues.password !== "" &&
      formValues.confirmPassword !== "" &&
      formValues.password === formValues.confirmPassword &&
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_)){6,15}/.test(formValues.password) &&
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_)){6,15}/.test(formValues.confirmPassword)
    ) {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText: "Update",
        spinner: true,
      });

      setValid(true);
    } else {
      setFocused({
        ...focused,
        oldPassword: true,
        newPassword: true,
        confirmNewPassword: true,
      });

      setPasswordMatchCheck(true);
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        changePassword({
          current_password: formValues.current_password,
          password: formValues.password,
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    if (passwordChangeFailure) {
      setFormState({ ...initialFormState });
    }

    return () => {
      dispatch(restoreChangePasswordInitial());
    };
  }, [passwordChangeFailure]);

  useEffect(() => {
    if (passwordChangeSuccess) {
      setFormState({ ...initialFormState });
      setFormValues({ ...initialFormValues });
      setFocused({
        ...focused,
        oldPassword: false,
        newPassword: false,
        confirmNewPassword: false,
      });
    }

    return () => {
      dispatch(restoreChangePasswordInitial());
    };
  }, [passwordChangeSuccess]);

  return (
    <div className="bio-wrapper">
      <p className="bio-wrapper-text">Change Your Password</p>
      <div className="bio-form">
        <div className="input-group-old-password">
          <input
            name="oldPassword"
            type={passwordShow ? "text" : "password"}
            placeholder="Current Password*"
            className="change-password-input"
            value={formValues.current_password}
            onChange={(e) => oldPasswordHandler(e)}
            required
            onBlur={(e) => handleFocus(e)}
            focused={focused.oldPassword.toString()}
          />

          {passwordShow ? (
            <i className="fa fa-eye-slash toggle-pass" onClick={() => handlePasswordHide()}></i>
          ) : (
            <i className="fa fa-eye toggle-pass" onClick={() => handlePasswordShow()}></i>
          )}

          <p className="reset-validation-error-text">Password is required!</p>
        </div>

        <div className="input-group">
          <div className="input-group-wrapper-left">
            <input
              name="newPassword"
              className="change-password-input"
              type={passwordShow ? "text" : "password"}
              placeholder="New Password*"
              value={formValues.password}
              required
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$"
              onBlur={(e) => handleFocus(e)}
              focused={focused.newPassword.toString()}
              onFocus={() => setShowPasswordDesc(true)}
              onChange={(e) => passwordHandler(e)}
            />
            {passwordShow ? (
              <i className="fa fa-eye-slash toggle-pass" onClick={() => handlePasswordHide()}></i>
            ) : (
              <i className="fa fa-eye toggle-pass" onClick={() => handlePasswordShow()}></i>
            )}
            {showPasswordDesc ? (
              <p className="green-warning">
                Password should be 6-15 characters and include at least 1 lower case letter, 1
                uppercase letter, 1 number and 1 special character!
              </p>
            ) : (
              <p className="reset-validation-error-text">Password is required!</p>
            )}
          </div>

          <div className="input-group-wrapper-right">
            <input
              name="confirmNewPassword"
              className="change-password-input"
              type={passwordShow ? "text" : "password"}
              placeholder="Confirm Password*"
              value={formValues.confirmPassword}
              required
              onChange={(e) => confirmPasswordHandler(e)}
              pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$"
              onBlur={(e) => handleFocus(e)}
              focused={focused.confirmNewPassword.toString()}
            />
            {passwordShow ? (
              <i className="fa fa-eye-slash toggle-pass" onClick={() => handlePasswordHide()}></i>
            ) : (
              <i className="fa fa-eye toggle-pass" onClick={() => handlePasswordShow()}></i>
            )}
            <p className="reset-validation-error-text">This field must fufill password format</p>
            {formValues.password !== formValues.confirmPassword &&
            formValues.confirmPassword !== "" &&
            formValues.password !== "" ? (
              <p className="password_match">Password do not match!</p>
            ) : (
              ""
            )}{" "}
          </div>
        </div>

        <button
          disabled={formState.buttonState}
          onClick={() => handleSubmit()}
          className="bio-button"
        >
          {formState.spinner === true ? <Spinner /> : formState.buttonText}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
