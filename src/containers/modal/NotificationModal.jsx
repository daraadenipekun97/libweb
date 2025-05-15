import React from "react";
import "./notificationModal.css";
import okadaImage from "../../assets/images/HeroSectionBlur.png";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NotificationModal = ({ showNotification, setShowNotification }) => {

  const navigate = useNavigate();

  const showHideClassName = showNotification
    ? "main-modal-bg-dashboard display-block"
    : "main-modal-bg-dashboard display-none";

  const handleClose = () => {
    setShowNotification(false);
  };

  
  const handleNavigate = () => {
    navigate("/blog");
  };

  return (
    <div className={showHideClassName}>
      <div className="modal-main-dashboard">
        <>

          <div className="modal-header-dashboard">
            <h4 className="modal-title-dashboard">
              Read a blog today
            </h4>
            <button className="close-icon-button" onClick={handleClose}>
               <AiOutlineCloseCircle size={20} />            
            </button>
          </div>

          <div className="modal-img">
            <img src={okadaImage} alt="Okada books notice" />
            <button className="modal-prompt-btn" onClick={handleNavigate}>Go to Blog</button>
          </div>
        </>

        {/* <hr />
        <div className="btn-modal-wrapper-dashboard">
          <button className="modal-btn-dashboard" onClick={() => handleClose()}>
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default NotificationModal;
