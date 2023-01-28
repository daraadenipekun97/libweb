import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import SingleBook from "../../components/singleBook/SingleBook";
import "./dashboard.css";
import { fetchAllTrendingBooks, fetchSubscriptionDetails } from "../../Actions";
import { Footer, Header } from "../../containers";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Modal = ({ handleClose, show, handleNavigate }) => {
  const showHideClassName = show ? "main-modal-bg display-block" : "main-modal-bg display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <>
          <h4 className="modal-title">
            Trial{" "}
            <span style={{ float: "right" }}>
              <AiOutlineCloseCircle size={20} color="#5e458b" onClick={handleClose} />
            </span>
          </h4>
          <p className="modal-text">Great to have you here!</p>
          <p className="modal-text">Get Started with ₦100 for 7 days</p>
        </>

        <hr />
        <div className="btn-modal-wrapper">
          <button className="modal-btn" onClick={handleClose}>
            No
          </button>
          <button className="modal-btn-start-trial" onClick={handleNavigate}>
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { trendingBooks } = useSelector((state) => state.books);
  const { subscriptionDetails } = useSelector((state) => state.profile);

  const [slicedTrendingBooks, setSlicedTrendingBooks] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchAllTrendingBooks());
    dispatch(fetchSubscriptionDetails());
  }, []);

  useEffect(() => {
    if (subscriptionDetails.subscription === null) {
      setShow(true);

      // let loaded = parseInt(localStorage.getItem('loaded'), 10),
      //   loaded_numb = loaded ? loaded + 1 : 1;
      // localStorage.setItem('loaded', loaded_numb);
      // if (loaded_numb === 2 || loaded_numb === 1) {
      //   setShow(true);

      // } else {
      //   setTimeout(() => {setShow(true);}, 300000)

      // }
    } else {
      // localStorage.removeItem('loaded');

      setShow(false);
    }
  }, [subscriptionDetails]);

  const handleClose = () => {
    setShow(false);
  };

  const handleNavigate = () => {
    navigate("/home/subscription");
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
      <Footer />
      <Modal handleClose={handleClose} show={show} handleNavigate={handleNavigate} />
    </>
  );
};

export default Dashboard;
