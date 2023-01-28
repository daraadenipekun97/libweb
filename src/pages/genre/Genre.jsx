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
  const [genreList, setGenreList] = useState([]);
  const [childStat, setChildStat] = useState(false);

  const { allGenre } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchAllGenre());

    const userDataRegister = JSON.parse(localStorage.getItem("userRegData"));
    const userDataLogin = JSON.parse(localStorage.getItem("userLoginData"));

    let childStatus =
      userDataRegister !== null
        ? userDataRegister.user.child
        : userDataLogin !== null
        ? userDataLogin.user.child
        : "";

    setChildStat(childStatus);
  }, [dispatch]);

  useEffect(() => {
    if (allGenre.length !== 0 && childStat) {
      let filterGenre = allGenre.filter((genre) => genre.children === 1);
      setGenreList(filterGenre);
    } else {
      setGenreList(allGenre);
    }
  }, [allGenre]);

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

        <GenreTab allGenre={genreList} />
      </div>
      <Footer />
    </>
  );
};

export default Genre;
