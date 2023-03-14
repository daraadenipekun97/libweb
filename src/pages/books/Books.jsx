import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { AiFillLeftCircle } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import "./books.css";
import Tab from "../../components/tab/Tab";
import bookImg from "../../assets/images/wolesoyinka.jpg";
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
} from "../../Actions";
import Preloader from "../../components/preloader/Preloader";
import StarRating from "../../components/starRating/StarRating";
import Reader from "../../containers/Reader";
import { toastr } from "react-redux-toastr";

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
  } = useSelector((state) => state.books);
  const { subscriptionDetails } = useSelector((state) => state.profile);

  const [toggleHeart, setToggleHeart] = useState(false);

  useEffect(() => {
    // debugger
    window.scrollTo(0, 0);
    dispatch(fetchBookDetails(params.id));
    dispatch(fetchSubscriptionDetails());
    //  console.log('current URL 👉️', window.location.href);
    //  console.log('current Pathname 👉️', window.location.pathname);
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
    debugger;
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

  const handleStartReading = (url, bookId) => {
    let expiryDate =
      subscriptionDetails.expiry_date !== null
        ? new Date(new Date(subscriptionDetails.expiry_date).toDateString())
        : "";

    if (subscriptionDetails.expiry_date !== null) {
      //navigate to reader

      let todaysDate = new Date();

      if (
        todaysDate.valueOf() < expiryDate.valueOf() &&
        subscriptionDetails.subscription.title === "Trial"
      ) {
        if (subscriptionDetails.cancel_trial === 0) {
          // navigate("/home/reader", {
          //   state: {
          //     id: url,
          //   },
          // });
          window.location.href = `https://libreader.vercel.app/#${url}`;
          dispatch(readBook(bookId));
        } else {
          // toastr.warning('You cant read this book because your subscription is canceled', 'Please subscribe or reactive your subscription');

          window.location.href = `https://libreader.vercel.app/#${url}`;
          dispatch(readBook(bookId));
        }
      } else if (
        todaysDate.valueOf() > expiryDate.valueOf() &&
        subscriptionDetails.subscription.title === "Trial"
      ) {
        navigate("/home/subscription");
      }

      if (
        todaysDate.valueOf() < expiryDate.valueOf() &&
        subscriptionDetails.subscription.title !== "Trial"
      ) {
        if (subscriptionDetails.cancel_subscription === 0) {
          // navigate("/home/reader", {
          //   state: {
          //     id: url,
          //   },
          // });

          window.location.href = `https://libreader.vercel.app/#${url}`;
          dispatch(readBook(bookId));
        } else {
          window.location.href = `https://libreader.vercel.app/#${url}`;
          dispatch(readBook(bookId));
        }
      } else if (
        todaysDate.valueOf() > expiryDate.valueOf() &&
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
    (book) => book.id != bookDetails.book.id
  );

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
      </div>
      <Footer />
    </>
  );
};

export default Books;
