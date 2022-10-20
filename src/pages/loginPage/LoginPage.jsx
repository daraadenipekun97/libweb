import React from 'react'
import './loginPage.css'
import { Navbar } from '../../containers';


const LoginPage = () => {
  return (
    <>
        <Navbar/>

   
    <div className="lib-register-container">
    <div class="lib-register-wrapper">
          <h1>Login</h1>
          <div className="lib-register-form" style={{textAlign:'center'}}>
              <div className="lib-register-input-group" style={{display:'block'}}>
                  <input type="text" placeholder='Email*' />
                  <input type="password" placeholder='Password*' />
              </div>
          

              <div className="lib-register-input-group" id='btn-group'>
                  <button disabled = {false}>Login</button>
              </div>

                <br />

                <hr />

                <br />

                <p>Or</p>

                <button  className="login-with-google-btn">Sign in with Google</button>

                <p>Dont have an account then ? <a href="register">Register Here</a></p>




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

export default LoginPage