import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { AiFillLeftCircle } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import "./books.css";
import Tab from "../../components/tab/Tab";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Footer } from "../../containers";
import SingleBook from "../../components/singleBook/SingleBook";
import {
  fetchBookDetails,
  addBookToFav,
  removeBookFromFav,
  restoreFavouriteInitial,
  restoreUnfavouriteInitial,
  readBook,
  fetchSubscriptionDetails,
  restoreFetchBookDetails,
  fetchSongs,
  fetchBookBySuggestion,
} from "../../Actions";
import Preloader from "../../components/preloader/Preloader";
import StarRating from "../../components/starRating/StarRating";

const Books = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const {
    bookDetails,
    addBookToFavouriteSuccess,
    addBookToFavouriteFailure,
    removeBookFromFavouriteSuccess,
    removeBookFromFavouriteFailure,
    booksBySuggestion,
  } = useSelector((state) => state.books);
  const { subscriptionDetails } = useSelector((state) => state.profile);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchBookDetails(params.id));
    dispatch(fetchSubscriptionDetails());
    dispatch(fetchBookBySuggestion(params.id));
    // dispatch(fetchSongs());

    //  console.log('current URL 👉️', window.location.href);
    // console.log('current Pathname 👉️', window.location.pathname);
  }, [dispatch, params.id]);

  useEffect(() => {
    let pathname = window.location.pathname;
    let slicedPathname = pathname.slice(0, 12);
    // console.log(slicedPathname)

    if (slicedPathname === "/home/books/") {
      localStorage.setItem("book", window.location.href);
    }
  }, [dispatch, window.location.pathname]);

  const handleBack = () => {
    dispatch(restoreFetchBookDetails());
    navigate("/home/trending");
  };

  const handleRemoveFav = (id) => {
    dispatch(removeBookFromFav(id));
    // setToggleHeart(false);
  };

  const handleAddFav = (id) => {
    dispatch(addBookToFav(id));
  };

  useEffect(() => {
    if (addBookToFavouriteSuccess) {
      dispatch(fetchBookDetails(params.id));
    }

    return () => {
      dispatch(restoreFavouriteInitial());
    };
  }, [addBookToFavouriteSuccess]);

  useEffect(() => {
    if (addBookToFavouriteFailure) {
      dispatch(fetchBookDetails(params.id));
    }

    return () => {
      dispatch(restoreFavouriteInitial());
    };
  }, [addBookToFavouriteFailure]);

  useEffect(() => {
    if (removeBookFromFavouriteSuccess) {
      dispatch(fetchBookDetails(params.id));
    }

    return () => {
      dispatch(restoreUnfavouriteInitial());
    };
  }, [removeBookFromFavouriteSuccess]);

  useEffect(() => {
    if (removeBookFromFavouriteFailure) {
      dispatch(fetchBookDetails(params.id));
    }

    return () => {
      dispatch(restoreUnfavouriteInitial());
    };
  }, [removeBookFromFavouriteFailure]);

  if (Object.keys(bookDetails).length === 0) {
    return <Preloader />;
  }

  if (Object.keys(booksBySuggestion).length === 0) {
    return <Preloader />;
  }

  const handleStartReading = (url, bookId) => {
    // debugger;
    // let expiryDate =
    //   subscriptionDetails.expiry_date !== null
    //     ? new Date(new Date(subscriptionDetails.expiry_date).toDateString())
    //     : "";

    if (subscriptionDetails.status === "active") {
      //navigate to reader

      // let todaysDate = new Date();

      if (
        subscriptionDetails.status === "active" &&
        subscriptionDetails.subscription.title === "Trial"
      ) {
        if (subscriptionDetails.cancel_trial === 0) {
          navigate("/home/reader", {
            state: {
              id: url,
              bookId: bookId,
            },
          });
          dispatch(readBook(bookId));
        } else {
          navigate("/home/reader", {
            state: {
              id: url,
              bookId: bookId,
            },
          });
          dispatch(readBook(bookId));
        }
      } else if (
        subscriptionDetails.status !== "active" &&
        subscriptionDetails.subscription.title === "Trial"
      ) {
        navigate("/home/subscription");
      }

      if (
        subscriptionDetails.status === "active" &&
        subscriptionDetails.subscription.title !== "Trial"
      ) {
        if (subscriptionDetails.cancel_subscription === 0) {
          navigate("/home/reader", {
            state: {
              id: url,
              bookId: bookId,
            },
          });
          dispatch(readBook(bookId));
        } else {
          navigate("/home/reader", {
            state: {
              id: url,
              bookId: bookId,
            },
          });
          dispatch(readBook(bookId));
        }
      } else if (
        subscriptionDetails.status !== "active" &&
        subscriptionDetails.subscription.title !== "Trial"
      ) {
        // toastr.warning('You cant read this book because you do not have an active subscription', 'Please subscribe')
        navigate("/home/subscription");
      }
    } else {
      navigate("/home/subscription");
    }
  };

  let filterAuthorBooks = bookDetails.book.author.books.filter(
    (book) => book.id !== bookDetails.book.id
  );

  let filterSuggestionBook = booksBySuggestion.filter((item) => item.id !== bookDetails.book.id);

  // console.log(filterSuggestionBook)

  return (
    <>
      <UserNavbar />
      <div className="books-container">
        <div className="backbutton" onClick={handleBack}>
          <AiFillLeftCircle size={20} color="#78787d" /> &nbsp;
          <p>Back to Discover</p>
        </div>

        <div className="books-container-wrapper">
          <div className="book-and-author">
            <div className="book-img">
              <img src={bookDetails.book.image_data} alt="" />
            </div>
            <div className="book-details">
              <h1 className="book-name">{bookDetails.book.name}</h1>
              <p className="author-name">{bookDetails.book.author.name}</p>
              <button
                className="start-reading-btn"
                onClick={() => handleStartReading(bookDetails.book.epub_data, bookDetails.book.id)}
              >
                Start Reading
              </button>
              {bookDetails.book.favorite ? (
                <AiFillHeart
                  size={25}
                  color="red"
                  onClick={() => handleRemoveFav(bookDetails.book.id)}
                />
              ) : (
                <AiOutlineHeart
                  size={25}
                  color="red"
                  onClick={() => handleAddFav(bookDetails.book.id)}
                />
              )}

              <StarRating bookDetails={bookDetails.rating} averageRating={true} />
              <p className="no-of-page-text">{`${bookDetails.book.pages} Pages`}</p>
            </div>
          </div>

          <div className="about-book-review">
            <Tab tabName="book" />
          </div>
        </div>

        <div className="author-books-wrapper">
          <SingleBook datas={filterAuthorBooks} searchBar={false} title="Author's Book" />
        </div>

        <div className="author-books-wrapper">
          <SingleBook datas={filterSuggestionBook} title="More Books like this" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Books;
