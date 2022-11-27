import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/myWishlist.css";
import Spinner from "../spinner/Spinner";
import { sendWishlist, restoreSendWishlistInitial } from "../../Actions";

const MyWishlist = () => {
  const dispatch = useDispatch();
  const { sendWishlistFailure, sendWishlistSuccess } = useSelector((state) => state.library);

  const [valid, setValid] = useState(false);
  const [requiredText, setRequiredText] = useState("");

  const initialFormState = {
    buttonState: false,
    buttonText: "Submit",
    spinner: false,
  };

  const [formState, setFormState] = useState({ ...initialFormState });

  useEffect(() => {}, [dispatch]);

  const initialFormValues = {
    book_title: "",
    book_author: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  const bookNameHandler = (e) => {
    setRequiredText("");

    if (e) {
      let titleValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        book_title: titleValue,
      });
    } else {
      setFormValues({
        ...formValues,
        book_title: "",
      });
    }
  };

  const bookAuthorHandler = (e) => {
    setRequiredText("");

    if (e) {
      let authorVal = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        book_author: authorVal,
      });
    } else {
      setFormValues({
        ...formValues,
        book_author: "",
      });
    }
  };

  const handleSubmit = () => {
    if (formValues.book_title !== "" && formValues.book_author !== "") {
      setFormState({
        ...formState,
        buttonState: true,
        buttonText: "Submit",
        spinner: true,
      });

      setValid(true);
    } else {
      setRequiredText("All fields are required");
    }
  };

  useEffect(() => {
    if (valid) {
      dispatch(
        sendWishlist({
          book_title: formValues.book_title,
          book_author: formValues.book_author,
        })
      );
    }

    return () => {
      setValid(false);
    };
  }, [valid]);

  //useeffect for success and failure below

  useEffect(() => {
    if (sendWishlistFailure === true) {
      setFormState({ ...initialFormState });
    }

    return () => {
      dispatch(restoreSendWishlistInitial());
    };
  }, [sendWishlistFailure]);

  useEffect(() => {
    if (sendWishlistSuccess === true) {
      setFormState({ ...initialFormState });
      setFormValues({ ...initialFormValues });
    }

    return () => {
      dispatch(restoreSendWishlistInitial());
    };
  }, [sendWishlistSuccess]);

  return (
    <>
      <h4 className="wishlist-h4">Wishlist</h4>
      <p className="wishlist-subtext">Request for Books you'd love to see on MyLibri Books</p>

      <div className="wishlist-form-wrapper">
        <p className="required_text">{requiredText}</p>

        <div className="input-wrapper">
          <input
            type="text"
            name="title"
            className="wishlist-input"
            value={formValues.book_title}
            placeholder="Book Title"
            required
            onChange={(e) => bookNameHandler(e)}
          />

          <input
            type="text"
            name="author"
            className="wishlist-input"
            placeholder="Book Author"
            required
            value={formValues.book_author}
            onChange={(e) => bookAuthorHandler(e)}
          />

          <button className="wishlist-btn" onClick={() => handleSubmit()}>
            {formState.spinner === true ? <Spinner /> : formState.buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default MyWishlist;
