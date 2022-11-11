import React, {  useEffect, useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../../containers";
import "./resetPassword.css";

import Spinner from "../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { resetPassword, restoreResetPasswordInitial } from "../../Actions";
import Swal from 'sweetalert2'


const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { resetPasswordSuccess, resetPasswordFailure } = useSelector((state) =>state.auth);

  const [valid, setValid] = useState(false);
  const [showPasswordDesc, setShowPasswordDesc] = useState(false)
  const [ passwordMatchCheck , setPasswordMatchCheck] = useState(false)

  const [focused, setFocused] = useState({
    token: false,
    password: false,
    confirmPassword:false
    
  })

  const handleFocus = (e) => {
    setShowPasswordDesc(false)
    if (e.target.name === 'token') {
        setFocused({...focused, token:true})
    }
    else if(e.target.name === 'password'){
      setFocused({...focused, password:true})
    }
    else if(e.target.name === 'confirmPassword'){
      setFocused({...focused, confirmPassword:true})
    }
}

const initialFormState = {
  buttonState: false,
  buttonText: "Reset",
  spinner:false
};

const [formState, setFormState] = useState({ ...initialFormState });


const initialFormValues = {
  token:"",
  password:"",
  confirmPassword:"",
}

const [formValues, setFormValues] = useState({ ...initialFormValues });



const tokenHandler = e => {
  if (e) {
      let tokenValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        token: tokenValue
      });
  } else {

    setFormValues({
      ...formValues,
      token: ""
    });


  }
};


const passwordHandler = e => {
  setPasswordMatchCheck(false)

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


const confirmPasswordHandler = e => {
  setPasswordMatchCheck(false)
  if (e) {
      let passwordValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        confirmPassword: passwordValue
      });
  } else {

    setFormValues({
      ...formValues,
      confirmPassword: ""
    });


  }
};


const handleSubmit = () =>{
  if (
    formValues.code !=="" &&
    formValues.password !== "" &&
    formValues.confirmPassword !=="" &&
    formValues.password === formValues.confirmPassword
  ) {

    setFormState({
      ...formState,
      buttonState: true,
      buttonText:'Send',
      spinner:true
  
    })

    setValid(true);

    
  } else {

    setFocused({
      ...focused,
      email:true,
      password:true,
      confirmPassword:true
    })

    setPasswordMatchCheck(true)
    
  }
}



useEffect(() => {
  if (valid) {

    dispatch(resetPassword({
      token:formValues.token,
      password:formValues.password
    }))
    
  }

  return () => {
    setValid(false)
  }
}, [valid])


const handleSwal = () =>{
  Swal.fire({
    title: 'Password Reset Success',
    icon: 'success',
    showDenyButton: false,
    showCancelButton: false,
    allowOutsideClick: false,
    confirmButtonText: 'Proceed to login',
    denyButtonText: `Don't save`,
    confirmButtonColor: '#5e458b',
    width: 400,
  }).then((result) => {
    if (result.isConfirmed) {
       navigate("/signin");

    } 
    // else if (result.isDenied) {
    //   Swal.fire('Changes are not saved', '', 'info')
    // }
  })
}


useEffect(() => {
  if(resetPasswordFailure){
    setFormState({...initialFormState});

  }

  return () => {
    dispatch(restoreResetPasswordInitial())

  }
}, [resetPasswordFailure])



useEffect(() => {
  if(resetPasswordSuccess){

    setFormState({...initialFormState});
    // setFormValues({...initialFormValues});
    
    handleSwal();
    


  }

  return () => {
    dispatch(restoreResetPasswordInitial())
  }
}, [resetPasswordSuccess])


  return (
    <>
      <Navbar />

      <div className="lib-login-container">
        <div class="lib-login-wrapper">
          <h1>Reset Password</h1>
          <p className="info-text">
                Enter the code sent to your email address
              </p>
          <br />
          <div className="lib-login-form" style={{ textAlign: "center" }}>

          <div className="lib-login-input-group">
              <input 
                name="token"
                type="text" 
                placeholder="Token*" 
                className="lib-login-email" 
                value = {formValues.token}
                onChange = {(e) => tokenHandler(e)}
                required
                onBlur={(e) => handleFocus(e)}
                focused = {focused.token.toString()}

              />
              <p className="login-validation-error-text">This field is required</p>
          </div>

            <div className="lib-login-input-group">
              <input 
                name="password"
                type="password" 
                placeholder="New Password*" 
                className="lib-login-email" 
                value={formValues.password}
                onChange = {(e) => passwordHandler(e)}
                required
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$"
                onBlur={(e) => handleFocus(e)}
                focused = {focused.password.toString()}
                onFocus = {() => setShowPasswordDesc(true)}

              />
                {
                  showPasswordDesc ? <p className="green-warning">Password should be 6-15 characters and include at least 1 lower case letter, 1 uppercase letter, 1 number and 1 special character!</p> :<p className="register-validation-error-text">Password is required!</p>
                }            
                </div>

            <div className="lib-login-input-group">
              <input 
                name="confirmPassword"
                type="password" 
                placeholder="Confirm New Password*" 
                className="lib-login-email" 
                value={formValues.confirmPassword}
                onChange = {(e) => confirmPasswordHandler(e)}
                required
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$"
                onBlur={(e) => handleFocus(e)}
                focused = {focused.confirmPassword.toString()}
              />
              <p className="login-validation-error-text">This field is required </p>
              {
                passwordMatchCheck ? <p className="password_match">Password do not match !</p> : ""
              }
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

            <p style={{ color: "#5e458b" }}>
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

export default ResetPassword;
