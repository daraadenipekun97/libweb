import React, {useRef} from 'react';
import { Navbar } from '../../containers';
import './register.css'


const Register = () => {

    const dateType = useRef(null)

    const handleDateType = () => {
       dateType.current.type = 'date'
    }
    
  return (
    <>
    <Navbar/>
    <div className="lib-register-container">
          <div class="lib-register-wrapper">
                <h1>Create your account</h1>
                <div className="lib-register-form">
                    <div className="lib-register-input-group">
                        <input type="text" placeholder='Firstname*' />
                        <input type="text" placeholder='Lastname*' />
                    </div>
                    <div className="lib-register-input-group">
                        <input type="email" placeholder='Email*' />
                        <input type="number" placeholder='Phone Number*' />
                    </div>
                    <div className="lib-register-input-group">
                        <input type="text" onFocus={() => handleDateType()} placeholder='Date of Birth*' ref = {dateType} />
                        <input type="text" placeholder='Referral*' />
                    </div>
                    <div className="lib-register-input-group">
                        <input type="text" placeholder='Select Country*' />
                        <input type="password" placeholder='Password*' />
                    </div>

                    <div className="lib-register-input-group" id='checkbx'>
                    <label htmlFor="terms">
                        <input type="checkbox" id='terms'  />
    
                        I agree to the <a href="#home">Terms and Conditions</a>  and to the <a href="#home">Privacy Policy</a> 
                        </label>
                    </div>

                    <div className="lib-register-input-group" id='btn-group'>
                        <button disabled = {false}>Register</button>
                    </div>

                      <br />

                      <hr />

                      <br />

                      <p>Already have an account then ? <a href="signin">Login Here</a></p>


                </div>
          </div>


    <div class="area" >
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
        </div >
    </div>
    </>
  
  )
}

export default Register