import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./genre.css";
import { useNavigate } from "react-router-dom";
import GenreTab from "../../components/allTabs/GenreTab";
import { fetchAllGenre } from "../../Actions";


const Genre = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Genre");

  const { allGenre } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchAllGenre());
  }, [dispatch]);


  const handleDiscover = () => {
    navigate("/home/discover");
  };

  const handleGenre = () => {
    navigate("/home/genre");
  };

  return (
    <>
      <UserNavbar />
      <div className="genre-container">
        <ul className="nav-discover">
          <li className={activeTab === "Discover" ? "active" : ""} onClick={handleDiscover}>
            Discover
          </li>
          <li className={activeTab === "Genre" ? "active" : ""} onClick={handleGenre}>
            Genre
          </li>
        </ul>

        <GenreTab allGenre = {allGenre} />
      </div>
      <Footer />
    </>
  );
};

export default Genre;
