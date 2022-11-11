import React, {  useEffect, useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import "./loginPage.css";
import { Navbar } from "../../containers";
import { userLogin, restoreUserLoginInitial } from "../../Actions";

import Spinner from "../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";



const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginSuccess, loginFailure } = useSelector((state) =>state.auth);

  const [valid, setValid] = useState(false);


  const [focused, setFocused] = useState({
    email: false,
    password: false,
    
  })

  const handleFocus = (e) => {
    if (e.target.name === 'email') {
        setFocused({...focused, email:true})
    }
    else if(e.target.name === 'password'){
      setFocused({...focused, password:true})
    }
}


const initialFormState = {
  buttonState: false,
  buttonText: "Login",
  spinner:false
};

const [formState, setFormState] = useState({ ...initialFormState });

const initialFormValues = {
  email:"",
  password:""
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


const passwordHandler = e => {
  if (e) {
      let passwordValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        password: passwordValue
      });
  } else {

    setFormValues({
      ...formValues,
      password: ""
    });


  }
};


const handleLogin = () =>{
  if (
    formValues.email !=="" &&
    formValues.password !==""
  ) {

    setFormState({
      ...formState,
      buttonState: true,
      buttonText:'Register',
      spinner:true
  
    })

    setValid(true);

    
  } else {

    setFocused({
      ...focused,
      email:true,
      password:true
    })
    
  }
}


useEffect(() => {
  if (valid) {

    dispatch(userLogin({
      email:formValues.email,
      password:formValues.password
    }))
    
  }

  return () => {
    setValid(false)
  }
}, [valid])


useEffect(() => {
  
  if(loginSuccess){
     navigate("/home/dashboard"); 

  }

  return () => {
    dispatch(restoreUserLoginInitial())
  }
}, [loginSuccess])


useEffect(() => {
  if (loginFailure) {
    setFormState({
      ...formState,
      buttonState: false,
      buttonText:'Login',
      spinner:false
  
    })

  }

  return () => {
    dispatch(restoreUserLoginInitial())

  }
}, [loginFailure])



  return (
    <>
      <Navbar />

      <div className="lib-login-container">
        <div class="lib-login-wrapper">
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
                onBlur={(e) =>handleFocus(e)}
                focused = {focused.email.toString()}
                onChange = {(e) => emailHandler(e)}
                />
              <p className="login-validation-error-text">Please input a valid email</p>
              <input 
                name="password"
                type="password" 
                placeholder="Password*"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$"
                className="lib-login-password" 
                required
                onBlur={(e) =>handleFocus(e)}
                focused = {focused.password.toString()}
                onChange = {(e) => passwordHandler(e)}

              />
              <p className="login-validation-error-text">Please input a valid password</p>
            </div>

            <div className="lib-login-input-group" id="btn-group">
              <button 
              
              disabled={formState.buttonState}           
              onClick = {() => handleLogin()}              

              
              >
              {formState.spinner === true ? <Spinner/> : formState.buttonText}
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
              Dont have an account? <a href="register">Sign up</a>
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
