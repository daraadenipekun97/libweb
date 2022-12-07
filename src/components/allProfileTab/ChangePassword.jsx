import React from 'react';
import "./css/changePassword.css";

const ChangePassword = () => {
  return (
    <div className='bio-wrapper'>
      <p className='bio-wrapper-text'>Change Your Password</p>
      <div className="bio-form">
      <input
          name="email"
          type="password"
          placeholder="Current Password*"
          value=""
          disabled
          className='email-input'
            />

        <div className="input-group">
              <div className="input-group-wrapper-left">
                <input
                  name="firstname"
                  type="password"
                  placeholder="New Password*"
                  value=""
                  required
                />
                <p className="profile-validation-error-text">firstname is required</p>
              </div>

              <div className="input-group-wrapper-right">
                <input
                  name="lastname"
                  type="password"
                  placeholder="Confirm Password*"
                  value=""
                  required
                />
                <p className="profile-validation-error-text">lastname is required</p>
              </div>

              
        </div>

        <button className='bio-button'>Edit</button>

      </div>
    </div>
  )
}

export default ChangePassword