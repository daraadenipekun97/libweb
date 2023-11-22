import React from 'react'
import "./notificationModal.css"
import okadaImage from "../../assets/images/Okada_Books_statement.jpg"


const NotificationModal = ({showNotification, setShowNotification}) => {

    const showHideClassName = showNotification
    ? "main-modal-bg-dashboard display-block"
    : "main-modal-bg-dashboard display-none";

    const handleClose = () => {
        setShowNotification(false)
      }; 

  return (
    <div className={showHideClassName}>
    <div className="modal-main-dashboard">
      <>
        <h4 className="modal-title-dashboard">
          NOTICE
        </h4>
        {/* <p className="modal-text-dashboard">Please update your profile</p>
        <p className="modal-text-dashboard">Country, Date of Birth & Phone Number</p> */}

    <div style={{borderTop:"1px solid #ddd"}}>
        {/* <iframe src={pdf} width="100%" height="300px" /> */}
        <img src={okadaImage} alt="Okada books notice" width="100%" height="100%"/>
    </div>

      </>

      <hr />
      <div className="btn-modal-wrapper-dashboard">
        <button className="modal-btn-dashboard" onClick={ () =>handleClose()}>
          Close
        </button>
      </div>
    </div>
  </div>
  )
}

export default NotificationModal