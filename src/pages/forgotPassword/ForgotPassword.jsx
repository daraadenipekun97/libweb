import React, {  useEffect, useState }  from "react";
import { useSelector, useDispatch } from "react-redux";

import "./forgotPassword.css";
import { Navbar } from "../../containers";
import { forgotPassword, restoreForgotPasswordInitial } from "../../Actions";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { forgotPasswordSuccess, forgotPasswordFailure } = useSelector((state) =>state.auth);

  const [valid, setValid] = useState(false);

  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }


  const initialFormState = {
    buttonState: false,
    buttonText: "Send",
    spinner:false
  };
  
  const [formState, setFormState] = useState({ ...initialFormState });

  const initialFormValues = {
    email:"",
  }
  
  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const emailHandler = e => {
    if (e) {
        let emailValue = e.target.value;
        e.preventDefault();
        setFormValues({
          ...formValues,
          email: emailValue
        });
    } else {
  
      setFormValues({
        ...formValues,
        email: ""
      });
  
  
    }
  };


  const handleSubmit = () =>{
    if (
      formValues.email !==""
    ) {
  
      setFormState({
        ...formState,
        buttonState: true,
        buttonText:'Send',
        spinner:true
    
      })
  
      setValid(true);
  
      
    } else {
  
      setFocused(true)
      
    }
  }


  useEffect(() => {
    if (valid) {
  
      dispatch(forgotPassword({
        email:formValues.email,
      }))
      
    }
  
    return () => {
      setValid(false)
    }
  }, [valid])



  useEffect(() => {
  
    if(forgotPasswordFailure){
        setFormState({...initialFormState})
        // setFormValues({...initialFormValues})   
    }
  
    return () => {
      dispatch(restoreForgotPasswordInitial())
    }
  }, [forgotPasswordFailure])


  useEffect(() => {
    if (forgotPasswordSuccess) {
      navigate("/reset");

    }
  
    return () => {
      dispatch(restoreForgotPasswordInitial())

    }
  }, [forgotPasswordSuccess])
  

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
          <div className="lib-login-form" style={{ textAlign: "center" }}>
            <div className="lib-login-input-group">
              <input 
              
              type="email" 
              placeholder="Email*" 
              className="lib-login-email" 
              value = {formValues.email}
              required
              pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
              onBlur={() =>handleFocus()}
              focused = {focused.toString()}
              onChange = {(e) => emailHandler(e)}
              />
              <p className="login-validation-error-text">Please input your email</p>
            </div>

            <div className="lib-login-input-group" id="btn-group">
              <button 
                disabled={formState.buttonState}
                onClick = {() => handleSubmit()}              
        
              >
              {formState.spinner === true ? <Spinner/> : formState.buttonText}
              </button>
            </div>

            <br />

            <br />

            <hr />

            <br />

            <p>Or</p>

            <br />
            <p>
              Dont have an account? <a href="register">Sign up</a>
            </p>
          </div>
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
