import React, { useRef } from "react";
import { Navbar } from "../../containers";
import Select from "react-select";
import "./register.css";

const Register = () => {
  const dateType = useRef(null);

  const handleDateType = () => {
    dateType.current.type = "date";
  };

  const options = [
    { value: "chocolate", label: "Nigeria" },
    { value: "strawberry", label: "Ghana" },
    { value: "vanilla", label: "Kenya" },
  ];

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

  return (
    <>
      <Navbar />
      <div className="lib-register-container">
        <div class="lib-register-wrapper">
          <h1>Create your account</h1>
          <div className="lib-register-form">
            <div className="lib-register-input-group">
              <div className="lib-register-input-group-wrapper-left">
                <input type="text" placeholder="Firstname*" />
                <p className="register-validation-error-text">Lorem i</p>
              </div>

              <div className="lib-register-input-group-wrapper-right">
                <input type="text" placeholder="Lastname*" />
                <p className="register-validation-error-text">Error! must not be empty</p>
              </div>
            </div>
            <div className="lib-register-input-group">
              <div className="lib-register-input-group-wrapper-left">
                <input type="email" placeholder="Email*" />
                <p className="register-validation-error-text">Lorem i</p>
              </div>

              <div className="lib-register-input-group-wrapper-right">
                <input type="number" placeholder="Phone Number*" />
                <p className="register-validation-error-text">Lorem i</p>
              </div>
            </div>
            <div className="lib-register-input-group">
              <div className="lib-register-input-group-wrapper-left">
                <input
                  type="text"
                  onFocus={() => handleDateType()}
                  placeholder="Date of Birth*"
                  ref={dateType}
                />
                <p className="register-validation-error-text">Lorem i</p>
              </div>
              <div className="lib-register-input-group-wrapper-right">
                <input type="text" placeholder="Referral*" />
                <p className="register-validation-error-text">Lorem i</p>
              </div>
            </div>
            <div className="lib-register-input-group">
              <div className="lib-register-input-group-wrapper-left">
                <Select options={options} styles={customStyles} placeholder="Country*" />
                <p className="register-validation-error-text">Lorem i</p>
              </div>

              <div className="lib-register-input-group-wrapper-right">
                <input type="password" placeholder="Password*" />
                <p className="register-validation-error-text">Lorem i</p>
              </div>
            </div>

            <div className="lib-register-input-group" id="checkbx">
              <label htmlFor="terms">
                <input type="checkbox" id="terms" />I agree to the{" "}
                <a href="#home">Terms and Conditions</a> and to the{" "}
                <a href="#home">Privacy Policy</a>
                <p className="register-validation-error-text">Lorem i</p>
              </label>
            </div>

            <div className="lib-register-input-group" id="btn-group">
              <button disabled={false}>Register</button>
            </div>

            <br />

            <hr />

            <br />

            <p className="lib-register-login-here">
              Already have an account then ? <a href="signin">Login Here</a>
            </p>
          </div>
        </div>

        <div class="area">
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

export default Register;
