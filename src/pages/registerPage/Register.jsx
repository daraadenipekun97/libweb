import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../../containers";
import Select from "react-select";
import "./register.css";
import { registerUser, fetchAllCountries, restoreRegisterInitial } from "../../Actions";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Register = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { countries } = useSelector((state) => state.getAll);
  const { registerSuccess, registerFailure } = useSelector((state) => state.auth);

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

  const dateType = useRef(null);

  const handleDateType = () => {
    dateType.current.type = "date";
  };

  const [theCountry, setTheCountry] = useState([]);

  useEffect(() => {
    const createCountrySelect = () => {
      let countryData = [];
      countries.map((country) => {
        let option = { value: country.id, label: country.name };
        countryData.push(option);
      });

      setTheCountry(countryData);
    };

    countries.length !== 0 && createCountrySelect();
  }, [countries]);

  useEffect(() => {
    dispatch(fetchAllCountries());
    if (user && location.pathname === "/register") {
      hanldeSwal();
    }
  }, [dispatch]);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "#fff",
      border: "2px solid #e9eaee",
      minHeight: "30px",
      height: "50px",
      boxShadow: state.isFocused ? null : null,
      marginBottom: "0.5rem",
      fontSize: "15px",

      "&:hover": {
        border: "1px solid #5e458b",
      },
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "50px",
      padding: "0 6px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "50px",
    }),
  };

  const [focused, setFocused] = useState({
    firstname: false,
    lastname: false,
    phone: false,
    password: false,
    dob: false,
    email: false,
  });

  const handleFocus = (e) => {
    setShowPasswordDesc(false);
    // setShowNameDesc(false)
    if (e.target.name === "firstname") {
      setFocused({ ...focused, firstname: true });
    } else if (e.target.name === "lastname") {
      setFocused({ ...focused, lastname: true });
    } else if (e.target.name === "email") {
      setFocused({ ...focused, email: true });
    } else if (e.target.name === "phone") {
      setFocused({ ...focused, phone: true });
    } else if (e.target.name === "password") {
      setFocused({ ...focused, password: true });
    } else if (e.target.name === "dob") {
      setFocused({ ...focused, dob: true });
    }
  };

  const [referralFocus, setReferralFocus] = useState(false);

  const handleReferralFocus = () => {
    setReferralFocus(true);
  };

  const handleReferralBlur = () => {
    setReferralFocus(false);
  };

  const initialFormState = {
    buttonState: false,
    buttonText: "Register",
    spinner: false,
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  const initialFormValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    dob: "",
    country_id: 0,
    password: "",
    device: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });
  const [termsCheckBox, setTermsCheckBox] = useState(false);

  const firstnameHandler = (e) => {
    if (e) {
      let nameValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        firstname: nameValue,
      });
    } else {
      setFormValues({
        ...formValues,
        firstname: "",
      });
    }
  };

  const lastnameHandler = (e) => {
    if (e) {
      let nameValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        lastname: nameValue,
      });
    } else {
      setFormValues({
        ...formValues,
        lastname: "",
      });
    }
  };

  const emailAddressHandler = (e) => {
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

  const phoneNumberHandler = (e) => {
    if (e) {
      let phoneValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        phone: phoneValue,
      });
    } else {
      setFormValues({
        ...formValues,
        phone: "",
      });
    }
  };

  const dobHandler = (e) => {
    if (e) {
      let dobValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        dob: dobValue,
      });
    } else {
      setFormValues({
        ...formValues,
        dob: "",
      });
    }
  };

  const [countryId, setCountryId] = useState({});
  const countryHandler = (e) => {
    setCountryError(false);
    if (e) {
      setCountryId(e);
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

  const termsHandler = (e) => {
    setTermsCheckBox(e.target.checked);
    setCheckedError(false);
  };

  const [showPasswordDesc, setShowPasswordDesc] = useState(false);
  // const [showNameDesc, setShowNameDesc] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);

  const handlePasswordShow = () => {
    setPasswordShow(true);
  };

  const handlePasswordHide = () => {
    setPasswordShow(false);
  };

  const [valid, setValid] = useState(false);
  const [checkedError, setCheckedError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  const handleRegister = () => {

   let b =  /[A-Z'][a-zA-Z'-]+/.test(formValues.firstname)
   console.log("b is " + b)

    if (
      formValues.firstname !== "" &&
      formValues.lastname !== "" &&
      formValues.email !== "" &&
      formValues.password !== "" &&
      formValues.phone !== "" &&
      formValues.dob !== "" &&
      countryId.label !== "" &&
      termsCheckBox === true &&
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_)){6,15}/.test(formValues.password) &&
      /^[A-Z'][a-zA-Z'-]+$/.test(formValues.firstname) &&
      /^[A-Z'][a-zA-Z'-]+$/.test(formValues.lastname)
    ) {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText: "Register",
        spinner: true,
      });

      setValid(true);
    } else {
      if (termsCheckBox !== true) {
        setCheckedError(true);
      }
      if (countryId.label === "") {
        setCountryError(true);
      }
      setFocused({
        ...focused,
        firstname: true,
        lastname: true,
        phone: true,
        password: true,
        dob: true,
        email: true,
      });
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        registerUser({
          firstname: formValues.firstname,
          lastname: formValues.lastname,
          email: formValues.email,
          phone: formValues.phone,
          dob: formValues.dob,
          country_id: countryId.value,
          password: formValues.password,
          device: "web",
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    if (registerFailure === true) {
      setFormState({ ...initialFormState });
    }

    return () => {
      dispatch(restoreRegisterInitial());
    };
  }, [registerFailure]);

  const handleSwal = () => {
    Swal.fire({
      title: "Registration Successful",
      icon: "success",
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonText: "Proceed to Email verification",
      denyButtonText: `Don't save`,
      confirmButtonColor: "#5e458b",
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/verify");
        window.location.reload();
      }
      // else if (result.isDenied) {
      //   Swal.fire('Changes are not saved', '', 'info')
      // }
    });
  };

  useEffect(() => {
    if (registerSuccess === true) {
      // setFormValues({...initialFormValues})
      setFormState({ ...initialFormState });
      // handleSwal();

      //removing the swal and doing the navigation right away
      navigate("/verify");
      window.location.reload();
    }

    return () => {
      dispatch(restoreRegisterInitial());
    };
  }, [registerSuccess]);

  const handleTermsNavigate = () => {
    navigate("/termsOfUse");
  };

  const handlePolicyNavigate = () => {
    navigate("/privacyPolicy");
  };

  const handleLoginNavigate = () => {
    navigate("/signin");
  };

  const handleKeyPress = (e) => {
    // let keyCode = e.keyCode ? e.keyCode : e.which;
    // if (
    //   (keyCode > 47 && keyCode < 58) ||
    //   keyCode == 32 ||
    //   e.shiftKey ||
    //   keyCode == 106 ||
    //   keyCode == 107 ||
    //   keyCode == 110 ||
    //   keyCode == 111 ||
    //   keyCode == 186 ||
    //   keyCode == 187 ||
    //   keyCode == 188 ||
    //   (keyCode >= 190 && keyCode < 222) ||
    //   (keyCode >= 96 && keyCode <= 105) ||
    //   keyCode == 144
    // ) {
    //   e.preventDefault();
    // }
  };

  return (
    <>
      <Navbar />
      <div className="lib-register-container">
        <div className="lib-register-wrapper">
          <h1>Create your account</h1>
          <div className="lib-register-form">
            <div className="lib-register-input-group">
              <div className="lib-register-input-group-wrapper-left">
                <input
                  name="firstname"
                  type="text"
                  placeholder="Firstname*"
                  value={formValues.firstname}
                  required
                  onBlur={(e) => handleFocus(e)}
                  focused={focused.firstname.toString()}
                  onChange={(e) => firstnameHandler(e)}
                  onKeyDown={(e) => handleKeyPress(e)}
                  onKeyUp={(e) => handleKeyPress(e)}
                  // onFocus={() => setShowNameDesc(true)}
                  pattern="[A-Z'][a-zA-Z'-]+"
                />

                <p className="register-validation-error-text">firstname is required (Uppercase first)</p>
              </div>

              <div className="lib-register-input-group-wrapper-right">
                <input
                  name="lastname"
                  type="text"
                  placeholder="Lastname*"
                  value={formValues.lastname}
                  required
                  onBlur={(e) => handleFocus(e)}
                  focused={focused.lastname.toString()}
                  onChange={(e) => lastnameHandler(e)}
                  onKeyDown={(e) => handleKeyPress(e)}
                  onKeyUp={(e) => handleKeyPress(e)}
                  // onFocus={() => setShowNameDesc(true)}
                  pattern="[A-Z'][a-zA-Z'-]+"

                />
                <p className="register-validation-error-text">lastname is required (Uppercase first)</p>
              </div>
            </div>
            <div className="lib-register-input-group">
              <div className="lib-register-input-group-wrapper-left">
                <input
                  name="email"
                  type="email"
                  placeholder="Email*"
                  value={formValues.email}
                  required
                  pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                  onBlur={(e) => handleFocus(e)}
                  focused={focused.email.toString()}
                  onChange={(e) => emailAddressHandler(e)}
                />
                <p className="register-validation-error-text">email is required(all lower case)</p>
              </div>

              <div className="lib-register-input-group-wrapper-right">
                <input
                  name="phone"
                  type="number"
                  id="phone-num"
                  placeholder="Phone Number*"
                  value={formValues.phone}
                  required
                  onBlur={(e) => handleFocus(e)}
                  focused={focused.phone.toString()}
                  onChange={(e) => phoneNumberHandler(e)}
                />
                <p className="register-validation-error-text">phone number is required</p>
              </div>
            </div>
            <div className="lib-register-input-group">
              <div className="lib-register-input-group-wrapper-left">
                <input
                  name="dob"
                  type="text"
                  onFocus={() => handleDateType()}
                  placeholder="Date of Birth*"
                  value={formValues.dob}
                  ref={dateType}
                  required
                  onBlur={(e) => handleFocus(e)}
                  focused={focused.dob.toString()}
                  onChange={(e) => dobHandler(e)}
                />
                <p className="register-validation-error-text">date of birth is required</p>
              </div>
              <div className="lib-register-input-group-wrapper-right">
                <input
                  type="text"
                  placeholder="Referral*"
                  onFocus={handleReferralFocus}
                  onBlur={handleReferralBlur}
                />
                {referralFocus ? <p className="green-warning">This field is not required</p> : ""}
              </div>
            </div>
            <div className="lib-register-input-group">
              <div className="lib-register-input-group-wrapper-left">
                <Select
                  options={theCountry}
                  // value = {countryId.label}
                  styles={customStyles}
                  placeholder={"Country"}
                  onChange={(e) => countryHandler(e)}
                />

                {countryError === true ? (
                  <p className="terms-validation-text">Select your country</p>
                ) : (
                  ""
                )}
              </div>

              <div className="lib-register-input-group-wrapper-right">
                <input
                  autoComplete="off"
                  name="password"
                  type={passwordShow ? "text" : "password"}
                  placeholder="Password*"
                  value={formValues.password}
                  required
                  pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$"
                  onBlur={(e) => handleFocus(e)}
                  focused={focused.password.toString()}
                  onChange={(e) => passwordHandler(e)}
                  onFocus={() => setShowPasswordDesc(true)}
                />
                {passwordShow ? (
                  <i
                    className="fa fa-eye-slash toggle-pass"
                    onClick={() => handlePasswordHide()}
                  ></i>
                ) : (
                  <i className="fa fa-eye toggle-pass" onClick={() => handlePasswordShow()}></i>
                )}
                {showPasswordDesc ? (
                  <p className="green-warning">
                    Password should be 6-15 characters and include at least 1 lower case letter, 1
                    uppercase letter, 1 number and 1 special character!
                  </p>
                ) : (
                  <p className="register-validation-error-text">Password is required</p>
                )}
              </div>
            </div>

            <div className="lib-register-input-group" id="checkbx">
              <label htmlFor="terms">
                <input type="checkbox" id="terms" required onChange={(e) => termsHandler(e)} />I
                agree to the{" "}
                <span className="policy_terms_link" onClick={handleTermsNavigate}>
                  Terms and Conditions
                </span>{" "}
                and to the{" "}
                <span className="policy_terms_link" onClick={handlePolicyNavigate}>
                  Privacy Policy
                </span>
                {checkedError === true ? (
                  <p className="terms-validation-text">
                    Accept the terms and condition to register
                  </p>
                ) : (
                  ""
                )}
              </label>
            </div>

            <div className="lib-register-input-group" id="btn-group">
              <button disabled={formState.buttonState} onClick={() => handleRegister()}>
                {formState.spinner === true ? <Spinner /> : formState.buttonText}
              </button>
            </div>

            <br />

            <hr />

            <br />

            <p className="lib-register-login-here">
              Already have an account? <span onClick={handleLoginNavigate}>Login</span>
            </p>
          </div>
        </div>

        <div className="area">
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

export default Register;
