import React, { useEffect, useState } from "react";
import "./css/reviewTab.css";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import StarRating from "../starRating/StarRating";
import { toast } from "react-toastify";
import { addReview, restoreAddReviewInitial, fetchBookDetails } from "../../Actions";

import { useParams, useNavigate } from "react-router-dom";

const ReviewTab = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { bookDetails } = useSelector((state) => state.books);
  const { addReviewSuccess, addReviewFailure } = useSelector((state) => state.library);

  const [valid, setValid] = useState(false);

  const initialFormValues = {
    review: "",
    rating: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const initialFormState = {
    buttonState: false,
    buttonText: "Submit Review",
    spinner: false,
  };
  const [formState, setFormState] = useState({ ...initialFormState });

  const tellUsHandler = (e) => {
    if (e) {
      let reviewValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        review: reviewValue,
      });
    } else {
      setFormValues({
        ...formValues,
        review: "",
      });
    }
  };

  const ratingHandler = (e) => {
    if (e) {
      let ratingValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        rating: ratingValue,
      });
    } else {
      setFormValues({
        ...formValues,
        rating: "",
      });
    }
  };

  const handleAddReview = () => {
    if (formValues.review !== "" && formValues.rating !== "") {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText: "Submit Review",
        spinner: true,
      });

      setValid(true);
    } else {
      toast.warning("Warning", "Please enter your review and rate the book");
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        addReview({
          review: formValues.review,
          rating: formValues.rating,
          id:bookDetails.book.id
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  useEffect(() => {
    if (addReviewSuccess) {
      setFormState({ ...initialFormState });
      setFormValues({ ...initialFormValues });
      dispatch(fetchBookDetails(params.id));
    }

    return () => {
      dispatch(restoreAddReviewInitial());
    };
  }, [addReviewSuccess]);

  useEffect(() => {
    if (addReviewFailure) {
      setFormState({ ...initialFormState });
    }

    return () => {
      dispatch(restoreAddReviewInitial());
    };
  }, [addReviewFailure]);

  if (Object.keys(bookDetails).length === 0) {
    return <Spinner />;
  }

  return (
    <div className="review-container">
      {bookDetails.reviews.length === 0 ? (
        <div className="no-review">
          <p className="no-review-text">No Review</p>
          <hr className="horizontal-rule" />
        </div>
      ) : (
        <>
          <div className={
            bookDetails.reviews.length === 0? "no-review-height" : "no-review"
          }>
            {bookDetails.reviews.map((review) => {
              return (
                <>
                  <StarRating
                    bookDetails={review.rating ? Math.trunc(review.rating * 1) : "No Rating"}
                    averageRating={false}
                  />
                  <p className="review-name">{review.user ? review.user.name : "-"}</p>
                  <p className="review-text">{review.review ? review.review : "No Review"}</p>
                  <div className="horizontal-rule"></div>
                </>
              );
            })}
          </div>
        </>
      )}

      <p className="write-review">Write Review</p>

      <textarea
        className="review-text-area"
        name="textarea"
        placeholder="Tell us what you think"
        onChange={(e) => tellUsHandler(e)}
        required
        value={formValues.review}
      />

      <select
        className="rating-select"
        onChange={(e) => ratingHandler(e)}
        value={formValues.rating}
      >
        <option value="" disabled selected>
          Select a rating
        </option>
        <option value={1.0}>1</option>
        <option value={2.0}>2</option>
        <option value={3.0}>3</option>
        <option value={4.0}>4</option>
        <option value={5.0}>5</option>
      </select>

      <button
        disabled={formState.buttonState}
        onClick={() => handleAddReview()}
        className="review-btn"
      >
        {formState.spinner === true ? <Spinner /> : formState.buttonText}
      </button>
    </div>
  );
};

export default ReviewTab;
