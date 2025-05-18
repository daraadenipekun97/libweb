import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./notificationModal.css";
import okadaImage from "../../assets/images/HeroSectionBlur.png";
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { fetchAllBanners } from "../../Actions";

const NotificationModal = ({ showNotification, setShowNotification }) => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allBanners } = useSelector((state) => state.getAll);
  const [randomBanner, setRandomBanner] = useState(null);

  useEffect(() => {
    dispatch(fetchAllBanners());
  }, [dispatch]);


  useEffect(() => {
    if (allBanners && allBanners.length > 0) {
      const randomIndex = Math.floor(Math.random() * allBanners.length);
      setRandomBanner(allBanners[randomIndex]);
    }
  }, [allBanners]);

  const showHideClassName = showNotification
    ? "banner-main-modal-bg-dashboard banner-display-block"
    : "banner-main-modal-bg-dashboard banner-display-none";

  const handleClose = () => {
    setShowNotification(false);
  };

  
  const handleNavigate = () => {
    // navigate(`${randomBanner?.prompt?.prompt_url}`);
    window.location.href = `${randomBanner?.prompt?.prompt_url}`
  };

  return (
    <div className={showHideClassName}>
      <div className="banner-modal-main-dashboard">
        <>

          <div className="banner-modal-header-dashboard">
            <h4 className="banner-modal-title-dashboard">
              {randomBanner?.title}
            </h4>
            <button className="banner-close-icon-button" onClick={handleClose}>
               <AiOutlineCloseCircle size={20} />            
            </button>
          </div>

          <div className="banner-modal-img">
            <img src={randomBanner?.image_data} alt="" />
            <button className="banner-modal-prompt-btn" onClick={handleNavigate}>{randomBanner?.prompt?.prompt}</button>
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
