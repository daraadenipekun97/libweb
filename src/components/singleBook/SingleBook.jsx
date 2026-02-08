import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
import { useNavigate, useLocation } from "react-router-dom";

import "./singleBook.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiFillHeart, AiOutlineHeart, AiFillDelete } from "react-icons/ai";

// import BookImg from "../../assets/images/wolesoyinka.jpg";
import Spinner from "../spinner/Spinner";
import PageHeaderText from "../pageHeaderText/PageHeaderText";
import {
  searchBooksUnauth,
  fetchProfile,
  removeBookFromFav,
  addBookToFav,
  removeFromLibrary,
} from "../../Actions";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? "main-modal-bg display-block" : "main-modal-bg display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <>
          <h4 className="modal-title">Oops!</h4>
          <p className="modal-text">You do not have access to this book</p>
        </>

        <hr />
        <button className="modal-btn" onClick={handleClose}>
          Ok
        </button>
      </div>
    </div>
  );
};

const SingleBook = ({ datas, searchBar, title, icon, favorite, subtext }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { profileData } = useSelector((state) => state.profile);

  const [spinnerHide, setSpinnerHide] = useState(false);
  const [show, setShow] = useState(false);
  const [childStat, setChildStat] = useState(false);
  const [emailVerifiedStatus, setEmailVertifiedStatus] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const initialFormValues = {
    search: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });

  useEffect(() => {
    setTimeout(() => {
      setSpinnerHide(true);
    }, 3000);

    const userDataRegister = JSON.parse(localStorage.getItem("userRegData"));
    const userDataLogin = JSON.parse(localStorage.getItem("userLoginData"));

    if (userDataRegister || userDataLogin) {
      setUserLoggedIn(true);
      dispatch(fetchProfile());
    }

    let childStatus =
      userDataRegister !== null
        ? userDataRegister.user.child
        : userDataLogin !== null
        ? userDataLogin.user.child
        : "";

    setChildStat(childStatus);

    return () => {
      setSpinnerHide(false);
    };
  }, [dispatch]);

  const searchTextHandler = (e) => {
    if (e) {
      let searchValue = e.target.value;
      e.preventDefault();
      setFormValues({
        ...formValues,
        search: searchValue,
      });
    } else {
      setFormValues({
        ...formValues,
        search: "",
      });
    }
  };

  const handleSearch = () => {
    if (formValues.search !== "") {
      setTimeout(() => {
        setSpinnerHide(true);
      }, 3000);
      dispatch(
        searchBooksUnauth({
          search: formValues.search,
        })
      );

      setFormValues({ ...initialFormValues });
    } else {
      setSpinnerHide(false);
      dispatch(
        searchBooksUnauth({
          search: "A",
        })
      );
      // toastr.warning("Search Book", "Please enter a search term");
    }
  };

  // function getYearDiffWithMonth(startDate, endDate) {
  //   const ms = endDate.getTime() - startDate.getTime();

  //   const date = new Date(ms);

  //   return Math.abs(date.getUTCFullYear() - 1970);
  // }

  const handleBookNavigate = (id) => {
    // if (
    //   childStat &&
    //   (title === "Trending Books" || title === "New Releases Books" || title === "Classic Books")
    // ) {
    //   setShow(true);
    // } else {
    navigate(`/home/books/${id}`);
    //uncomment the ccode below  to prevent the previously
    //viewed book from showing when a new book is clicked

    // window.location.reload();
    //}
  };

  const handleVerifyNavigate = () => {
    navigate("/verify");
  };

  const handleSignInNavigate = () => {
    navigate("/signin");
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSeeAll = () => {
    if (title === "Trending Books") {
      navigate("/home/trending");
    } else if (title === "New Releases Books") {
      navigate("/home/newReleases");
    } else if (title === "Classic Books") {
      navigate("/home/classics");
    } else if (title === "Educational & Kiddies Books") {
      navigate("/home/childrenscorner");
    } else if (title === "Author's Book") {
      navigate("/home/discover");
    } else {
    }
  };

  const handleRemoveFav = (id) => {
    dispatch(removeBookFromFav(id));
  };

  const handleAddFav = (id) => {
    dispatch(addBookToFav(id));
  };

  const handleRemoveFromLibrary = (id) => {
    dispatch(removeFromLibrary(id));
  };

  return (
    <div className="lib-book-gallery">
      <div className="lib-book-gallery-text">
        <div>
          <PageHeaderText text={title} />
          {location.pathname === "/" || location.pathname === "/home/dashboard" ? (
            <p className="header-subtext">{subtext}</p>
          ) : (
            <></>
          )}
        </div>
        {searchBar === true ? (
          <div className="growing-search">
            <div className="input">
              <input
                type="text"
                name="search"
                placeholder="Enter a search term"
                id="target-input"
                onChange={(e) => searchTextHandler(e)}
                value={formValues.search}
              />
            </div>
            <div className="submit">
              <button type="submit" onClick={() => handleSearch()}>
                Search
              </button>
            </div>
          </div>
        ) : searchBar === false ? (
          <p className="see-all-text" onClick={handleSeeAll}>
            See All
          </p>
        ) : (
          ""
        )}
      </div>
        <div className="books-grid">
          {datas.length !== 0 ? (
            datas.map((data, index) => {
              return (
                <div key={data.id}>
                  <div
                    // className={icon || favorite ? "lib-gallery-box-my-books" : "book-card"}
                    className="book-card"
                    style={{ animationDelay: `${0.1 * index}s` }}
                    onClick={() =>
                      userLoggedIn && profileData.email_verified_at
                        ? handleBookNavigate(data.id)
                        : userLoggedIn && profileData.email_verified_at === null
                        ? handleVerifyNavigate()
                        : handleSignInNavigate()
                    }
                  >
                    <div className="book-card-image-wrapper">
                      <div className="book-card-aspect">
                      <img
                        src={data.image_data ? data.image_data : ""}
                        alt={data.name ? data.name : ""}
                      />
                      </div>
                     

              <div className="book-card-overlay">
                    <button className="book-card-read-btn">
                          Read Now
                        </button>
                      </div>
                    </div>

                    <p className="lib-gallery-box-author">{data.author ? data.author.name : ""}</p>
                    <h1 className="lib-gallery-box-book-name">{data.name ? data.name : ""}</h1>
                  </div>
                  <div className="icons-container">
                    {icon ? (
                      <>
                        {data.favorite ? (
                          <>
                            <AiFillHeart
                              title="Remove from Favorite"
                              size={18}
                              color="red"
                              onClick={() => handleRemoveFav(data.id)}
                            />
                            <AiFillDelete
                              title="Delete from Library"
                              size={18}
                              onClick={() => handleRemoveFromLibrary(data.id)}
                              color="grey"
                            />
                          </>
                        ) : (
                          <>
                            <AiOutlineHeart
                              title="Add to Favorite"
                              size={18}
                              color="red"
                              onClick={() => handleAddFav(data.id)}
                            />
                            <AiFillDelete
                              title="Delete from Library"
                              size={18}
                              onClick={() => handleRemoveFromLibrary(data.id)}
                              color="grey"
                            />
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                    {favorite ? (
                      <AiFillHeart
                        title="Remove from Favorite"
                        size={18}
                        color="red"
                        onClick={() => handleRemoveFav(data.id)}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <Spinner spinnerHide={spinnerHide} />
          )}
        </div>
      <Modal handleClose={handleClose} show={show} />
    </div>
  );
};

export default SingleBook;
