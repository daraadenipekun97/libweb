import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import "./verifyEmail.css"
import { Navbar } from "../../containers";
import Preloader from "../../components/preloader/Preloader";
import Spinner from "../../components/spinner/Spinner";
import { verifyUserEmail, restoreVerifyUserEmailInitial, resendMail, restoreResendMailInitial } from "../../Actions";
import Swal from 'sweetalert2'

const VerifyEmail = ({user}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  const [loading, setLoading] = useState(true);
  const [focused, setFocused] = useState(false)
  const [valid, setValid] = useState(false);


  const { verifyUserFailure, verifyUserSuccess, resendMailSuccess, resendMailFailure} = useSelector((state) =>state.auth);


  const hanldeSwal = () =>{
    Swal.fire({
      title: 'Please Logout',
      icon: 'warning',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonText: 'Ok',
      denyButtonText: `Don't save`,
      confirmButtonColor: '#5e458b',
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/home/dashboard")
       


      } 
      // else if (result.isDenied) {
      //   Swal.fire('Changes are not saved', '', 'info')
      // }
    })
  }

  // useEffect(() => {
  //   if(user && location.pathname === "/verify")  {
  //     hanldeSwal()

  //   }
  // })



  const handleFocus = (e) => {
    setFocused(true)
  }



  const initialFormState = {
    buttonState: false,
    buttonText: "Send",
    spinner:false
};

  const [formState, setFormState] = useState({ ...initialFormState });



  const initialFormValues = {

    
      code:"",
     


}

const [formValues, setFormValues] = useState({ ...initialFormValues });



  const codeHandler = e => {
    if (e) {
        let codeValue = e.target.value;
        e.preventDefault();
        setFormValues({
          ...formValues,
          code: codeValue
        });
    } else {
  
      setFormValues({
        ...formValues,
        code: ""
      });
  
  
    }
  };


  const handleSubmit = () => {

    if (formValues.code !== "" ) {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText:'Send',
        spinner:true
    
      })
      setValid(true);  
    }
    else{

      setFocused(true)

    }

  }

  useEffect(() => {
    
    if(valid){
      dispatch(verifyUserEmail({
      code:formValues.code
      }))
      
    }
    
    return () => {
      setValid(false)
    }
  }, [valid])


  
  useEffect(() => {
    
    if(verifyUserFailure === true){

      setFormState({
        ...formState,
        buttonState: false,
        buttonText:'Send',
        spinner:false
    
      })

    }
  
    return () => {
      dispatch(restoreVerifyUserEmailInitial())
    }
  }, [verifyUserFailure])

  const handleSwal = () =>{
    Swal.fire({
      title: 'Email Verification Success',
      icon: 'success',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonText: 'Proceed to Dashboard',
      denyButtonText: `Don't save`,
      confirmButtonColor: '#5e458b',
      width: 400,
    }).then((result) => {
      if (result.isConfirmed) {
         navigate("/home/dashboard");

      } 
      // else if (result.isDenied) {
      //   Swal.fire('Changes are not saved', '', 'info')
      // }
    })
  }


  useEffect(() => {
    if(verifyUserSuccess === true){

      setFormState({
        ...formState,
        buttonState: false,
        buttonText:'Send',
        spinner:false
    
      })

      setFormValues({
        ...formValues,
        code: ""
      });

      handleSwal();
      


    }
  
    return () => {
      dispatch(restoreVerifyUserEmailInitial())
    }
  }, [verifyUserSuccess])



  //resend mail part Click here to resend

  const resendButtonState = {
    buttonState: false,
    buttonText: "Resend Token",
};

  const [resendBtnState, setResendBtnState] = useState({ ...resendButtonState});


  const handleResendMail = () => {

    setResendBtnState({
      ...resendBtnState,
      buttonState: true,
      buttonText: "Sending...",

    })

    dispatch(resendMail())

  }


  useEffect(() => {
    
    if(resendMailSuccess === true){

      setResendBtnState({
        ...resendBtnState,
        buttonState: false,
        buttonText: "Resend Mail",
  
      })

      



    }
  
    return () => {
      dispatch(restoreResendMailInitial())
    }
  }, [resendMailSuccess])



  useEffect(() => {
    if(resendMailFailure === true){

      setResendBtnState({
        ...resendBtnState,
        buttonState: false,
        buttonText: "Resend Mail",
  
      })

    }
  
    return () => {
      dispatch(restoreResendMailInitial())
    }
  }, [resendMailFailure])
  
  
  


    return (
      <>
      
    
          <div className="lib-verify-container">
            <div className="lib-verify-wrapper">
              <h1>Verify Email</h1>
              <p className="info-text">
                Enter the token sent to your email address
              </p>
              <br />
              <div className="lib-verify-form" style={{ textAlign: "center" }}>
                <div className="lib-verify-input-group">
                  <input 
                    type="text" 
                    placeholder="Token*" 
                    className="lib-verify-email"
                    required 
                    onBlur={handleFocus}
                    focused = {focused.toString()}
                    onChange = {(e) => codeHandler(e)}

                  />
                  <p className="verify-validation-error-text">This field is required</p>
                </div>
    
                <div className="lib-verify-input-group" id="btn-group">
                 <button 
                  disabled={formState.buttonState}    
                  onClick = {() => handleSubmit()}              
       
              >
                    
                    {formState.spinner === true ? <Spinner/> : formState.buttonText}
                  
                  </button>
                </div>
                <br />

                    <p className="lib-verify-p-tag">
                      Didnt get mail?  &nbsp;
                      <button 
                      disabled = {resendBtnState.buttonState}
                      onClick={() => handleResendMail()}>
                        
                        {resendBtnState.buttonText}
                      </button>
                    </p>
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
}


export default VerifyEmail