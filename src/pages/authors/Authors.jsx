import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import "./authors.css";
import bookImg from "../../assets/images/wolesoyinka.jpg";
import { Footer } from "../../containers";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchBookByAuthor, fetchAuthorsById } from "../../Actions";
import { useParams } from "react-router-dom";
import Avatar from "../../assets/images/avatar.png";

const Authors = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const { booksByAuthor, authorById } = useSelector((state) => state.books);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchBookByAuthor(params.id));
    dispatch(fetchAuthorsById(params.id));
  }, [dispatch]);

  return (
    <>
      <UserNavbar />

      <div className="author-container">
        <div className="author-wrapper">
          <div className="img-wrapper">
            {authorById.image_data ? (
              <img src={authorById.image_data} alt={authorById.name ? authorById.name : ""} />
            ) : (
              <img src={Avatar} alt="No Author Image" />
            )}
          </div>
          <div className="author-desc">
            <h1>{authorById.name ? authorById.name : ""}</h1>
            <p>About the author</p>
            <p>{authorById.about ? authorById.about : ""}</p>
          </div>
        </div>
        <div className="authors-books-wrapper">
          <SingleBook datas={booksByAuthor} searchBar="" title="Authors Book" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Authors;
