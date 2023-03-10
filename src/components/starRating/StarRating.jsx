import React from "react";
// import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";

import "./starRating.css";

const StarRating = ({ bookDetails, averageRating }) => {
  // const { bookDetails  } = useSelector((state) => state.books);

  if (bookDetails === null || bookDetails === "No Rating") {
    return (
      // <Spinner/>
      <p>No Rating</p>
    );
  }

  return (
    <>
      <div className="rating">
        {bookDetails >= 1 && bookDetails < 2 ? (
          <>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
          </>
        ) : bookDetails >= 2 && bookDetails < 3 ? (
          <>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
          </>
        ) : bookDetails >= 3 && bookDetails < 4 ? (
          <>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
          </>
        ) : bookDetails >= 4 && bookDetails < 5 ? (
          <>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star unrate" aria-hidden="true"></i>
          </>
        ) : bookDetails >= 5 ? (
          <>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
            <i className="fa fa-star rate" aria-hidden="true"></i>
          </>
        ) : (
          ""
        )}

        {averageRating ? (
          <p className="average-rating">
            {bookDetails !== null ? `(${Math.floor(bookDetails)}.0 Average Rating)` : "No Average Rating"}
          </p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default StarRating;
