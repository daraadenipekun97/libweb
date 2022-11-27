import React, { useState } from "react";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./genre.css";
import { useNavigate } from "react-router-dom";
import GenreTab from "../../components/allTabs/GenreTab";

const Genre = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Genre");

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

        <GenreTab />
      </div>
      <Footer />
    </>
  );
};

export default Genre;
