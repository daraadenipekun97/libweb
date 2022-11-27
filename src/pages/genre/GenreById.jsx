import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./genreById.css";
import { AiFillLeftCircle } from "react-icons/ai";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchBookByGenre } from "../../Actions";

const GenreById = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { booksByGenre } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBookByGenre(params.id));
  }, [dispatch]);

  const handleBack = () => {
    navigate("/home/genre");
  };

  return (
    <>
      <UserNavbar />

      <div className="genre-id-container">
        <div className="backbutton" onClick={handleBack}>
          <AiFillLeftCircle size={20} color="#78787d" /> &nbsp;
          <p>Back to Genre</p>
        </div>

        <SingleBook datas={booksByGenre} searchBar="" title="" />
      </div>
      <Footer />
    </>
  );
};

export default GenreById;
