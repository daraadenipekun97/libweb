import React from "react";
import "./writingCompetition.css";
import { PurpleButton, WhiteButton } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

const WritingCompetition = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home/writingChallenge");
  };

  const handleNavigateCategory = () => {
    navigate("/home/articlecategory");
  };

  return (
    <div className="lib-download-app-container">
      <div className="lib-download-app-wrapper">
        <div className="lib-download-app-left-content">
          <p className="lib-download-app-top-text">
            Stand a chance to win a free yearly/month subscription
          </p>
          <h1 className="lib-download-app-middle-text">Join the writing challenge</h1>
          <p className="lib-download-app-bottom-text">Vote for your favourite article</p>

          <div className="lib-download-app-two">
            <PurpleButton text="Go to Challenge" onClickFunction={handleNavigate} />
            <WhiteButton text="Vote an Article" onClickFunction={handleNavigateCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritingCompetition;
