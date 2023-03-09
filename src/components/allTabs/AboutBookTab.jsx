import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import "./css/aboutTab.css";
import { useNavigate } from "react-router-dom";

const AboutBookTab = () => {
  const navigate = useNavigate();

  const { bookDetails } = useSelector((state) => state.books);

  if (Object.keys(bookDetails).length === 0) {
    return <Spinner />;
  }

  let length = 200;

  function truncateText(text) {
    const trimmed = text.substring(0, length);
    return trimmed;
  }

  const handleLearnMore = (id) => {
    navigate(`/home/authors/${id}`);
  };

  return (
    <>
      <p className="book-desc">{bookDetails.book.about}</p>
      <div className="about-author">
        <p className="about-author-text">About Author</p>
        <div className="author-img">
          <div className="author-img-wrapper">
            <img src={bookDetails.book.author.image_data} alt={bookDetails.book.author.name} />
          </div>
          <div className="author-name-desc">
            <h1>{bookDetails.book.author.name}</h1>
            <p>{truncateText(bookDetails.book.author.about)}...</p>
            <div className="learn-more" onClick={() => handleLearnMore(bookDetails.book.author.id)}>
              Learn More
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBookTab;
