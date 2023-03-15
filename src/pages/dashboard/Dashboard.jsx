import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import SingleBook from "../../components/singleBook/SingleBook";
import "./dashboard.css";
import { fetchAllTrendingBooks, fetchSubscriptionDetails, fetchProfile} from "../../Actions";
import { Community, Footer, Header } from "../../containers";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";


const Modal = ({ handleClose, show, handleNavigate }) => {
  const showHideClassName = show
    ? "main-modal-bg-dashboard display-block"
    : "main-modal-bg-dashboard display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main-dashboard">
        <>
          <h4 className="modal-title-dashboard">
            Trial{" "}
            <span style={{ float: "right" }}>
              <AiOutlineCloseCircle size={20} color="#5e458b" onClick={handleClose} />
            </span>
          </h4>
          <p className="modal-text-dashboard">Great to have you here!</p>
          <p className="modal-text-dashboard">Get Started with ₦100 for 7 days</p>
        </>

        <hr />
        <div className="btn-modal-wrapper-dashboard">
          <button className="modal-btn-dashboard" onClick={handleClose}>
            No
          </button>
          <button className="modal-btn-start-trial-dashboard" onClick={handleNavigate}>
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalRedirect = ({ showRedirectModal, handleRedirect }) => {
  const showHideClassName = showRedirectModal
    ? "main-modal-bg-dashboard display-block"
    : "main-modal-bg-dashboard display-none";

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
          <button className="modal-btn-dashboard" onClick={handleRedirect}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { trendingBooks } = useSelector((state) => state.books);
  const { subscriptionDetails } = useSelector((state) => state.profile);
  const {
    profileData,
  } = useSelector((state) => state.profile);


  const [slicedTrendingBooks, setSlicedTrendingBooks] = useState([]);
  const [show, setShow] = useState(false);
  const [showRedirectModal, setShowRedirectModal] = useState(false)

  useEffect(() => {

    dispatch(fetchProfile());
    dispatch(fetchAllTrendingBooks());
    dispatch(fetchSubscriptionDetails());

   

  }, [dispatch]);

  useEffect(() => {

    if(profileData){

      if(profileData.dob === null || profileData.country_id === null){
        setShowRedirectModal(true)
        setShow(false)
      }

    }else{

    }

  },[profileData])

  useEffect(() => {
    if (subscriptionDetails.subscription === null && location.state === null) {
      setShow(true);
    } else if (subscriptionDetails.subscription === null && location.state.id === false) {
      setShow(false);
    } else {
      setShow(false);
    }
  }, [subscriptionDetails.subscription]);

  const handleClose = () => {
    setShow(false);
  };

  const handleNavigate = () => {
    navigate("/home/subscription");
  };

  const handleRedirect = () => {
    navigate("/home/profile");
  };


  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  useEffect(() => {
    if (trendingBooks.length !== 0) {
      const slicedTrending = getMultipleRandom(trendingBooks, 10);
      setSlicedTrendingBooks(slicedTrending);
    }
  }, [trendingBooks]);

  return (
    <>
      <UserNavbar />
      <Header />
      <div className="book-container">
        <div className="books-wrapper">
          <SingleBook datas={slicedTrendingBooks} searchBar={false} title="Trending Books" />
        </div>
      </div>
      <Community />
      <Footer />
      <Modal handleClose={handleClose} show={show} handleNavigate={handleNavigate} />
      <ModalRedirect  showRedirectModal={showRedirectModal} handleRedirect={handleRedirect} />

    </>
  );
};

export default Dashboard;
