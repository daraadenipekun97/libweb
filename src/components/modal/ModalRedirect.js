import React from 'react'
import { useNavigate } from "react-router-dom";
import "./modalRedirect.css"

const ModalRedirect = ({showRedirectModal}) => {

    const navigate = useNavigate();


    const showHideClassName = showRedirectModal
    ? "main-modal-bg-dashboard display-block"
    : "main-modal-bg-dashboard display-none";

    const handleRedirect = () => {
        navigate("/home/profile");
      }; 

  return (
    <div className={showHideClassName}>
      <div className="modal-main-dashboard">
        <>
          <h4 className="modal-title-dashboard">
            Profile Update{" "}
          </h4>
          <p className="modal-text-dashboard">Please update your profile</p>
          <p className="modal-text-dashboard">Country, Date of Birth & Phone Number</p>

        </>

        <hr />
        <div className="btn-modal-wrapper-dashboard">
          <button className="modal-btn-dashboard" onClick={ () =>handleRedirect()}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
   
  
}

export default ModalRedirect


