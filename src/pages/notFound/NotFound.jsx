import React from "react";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import "./notFound.css";
import NotFoundImage from "../../assets/images/clip-exclamation-mark.png";
import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../containers";

const NotFound = ({ user }) => {
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    navigate("/home/dashboard");
  };

  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}
      <div className="not-found-wrapper">
        <div className="not-found-container">
          <img src={NotFoundImage} alt="" />
          <h1 className="not-found-h1">404</h1>
          <p className="not-found-p">Sorry we couldnt find this page</p>
          <button className="not-found-back" onClick={() => handleHomeNavigate()}>
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
