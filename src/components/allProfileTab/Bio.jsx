import React from 'react';
import "./css/bio.css";

const Bio = () => {
  return (
    <div className='bio-wrapper'>
      <p className='bio-wrapper-text'>You Can Modify Your Name And Gender</p>
      <div className="bio-form">
      <input
          name="email"
          type="email"
          placeholder="Email*"
          value="dara@gmail.com"
          disabled
          className='email-input'
            />

        <div className="input-group">
              <div className="input-group-wrapper-left">
                <input
                  name="firstname"
                  type="text"
                  placeholder="Firstname*"
                  value=""
                  required
                />
                <p className="profile-validation-error-text">firstname is required</p>
              </div>

              <div className="input-group-wrapper-right">
                <input
                  name="lastname"
                  type="text"
                  placeholder="Lastname*"
                  value=""
                  required
                />
                <p className="profile-validation-error-text">lastname is required</p>
              </div>

              
        </div>
        <div className="input-group">
              <div className="input-group-wrapper-left">
                <input
                  name="dob"
                  type="date"
                  placeholder="Date of Birth*"
                  value=""
                  required
                  disabled
                />
              </div>

              <div className="input-group-wrapper-right">
                <input
                  name="Phone Number"
                  type="number"
                  placeholder="Phone Number*"
                  value=""
                  required
                />
                <p className="profile-validation-error-text">lastname is required</p>
              </div>
        </div>


        <div className="input-group">
              <div className="input-group-wrapper-left">
                <input
                  name="country"
                  type="text"
                  placeholder="Country*"
                  value=""
                  required
                />
                <p className="profile-validation-error-text">firstname is required</p>
              </div>

              <div className="input-group-wrapper-right">
              <select name="cars" id="cars" className='gender-select'>
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
              </select>
              </div>
        </div>


        <button className='bio-button'>Edit</button>

      </div>
    </div>
  )
}

export default Bio