import React, { useState, useEffect } from "react";
import "./tab.css";
import { useLocation, useNavigate } from "react-router-dom";

import MyBooks from "../allTabs/MyBooks";
import MyFavourite from "../allTabs/MyFavourite";
import MyReadingGoals from "../allTabs/MyReadingGoals";
import MyWishlist from "../allTabs/MyWishlist";
import PageHeaderText from "../pageHeaderText/PageHeaderText";
import DiscoverTab from "../allTabs/DiscoverTab";
import GenreTab from "../allTabs/GenreTab";
import TrendingTab from "../allTabs/TrendingTab";
import AboutBookTab from "../allTabs/AboutBookTab";
import ReviewTab from "../allTabs/ReviewTab";

const Tab = ({ tabName }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(
    tabName === "library" ? "MyBooks" : tabName === "discover" ? "Discover" : "About"
  );

  //  Functions to handle Tab Switching
  const handleBooks = () => {
    setActiveTab("MyBooks");
  };
  const handleFav = () => {
    setActiveTab("MyFavourite");
  };

  const handleGoals = () => {
    setActiveTab("MyReadingGoals");
  };

  const handleWishlist = () => {
    setActiveTab("MyWishlist");
  };

  const handleDiscover = () => {
    if (location.pathname === "/home/trending" || location.pathname === "/home/genre") {
      navigate("/home/discover");
    } else {
      setActiveTab("Discover");
    }
  };

  const handleGenre = () => {
    if (location.pathname === "/home/discover" || location.pathname === "/home/trending") {
      navigate("/home/genre");
      setActiveTab("");
    }

    // else{
    //   setActiveTab("Genre");

    // }
  };

  const handleAbout = () => {
    setActiveTab("About");
  };

  const handleReview = () => {
    setActiveTab("Reviews");
  };

  useEffect(() => {
    if (location.pathname === "/home/trending") {
      setActiveTab("trending");
    } else if (location.pathname === "/home/books/id") {
      setActiveTab("About");
    }
  }, []);

  return (
    <div className={activeTab === "About" || activeTab === "Reviews" ? "Tabs-two" : "Tabs"}>
      <div className="tabs-wrapper">
        {tabName === "library" ? (
          <>
            <PageHeaderText text="Library" />

            <ul className="nav-library">
              <li className={activeTab === "MyBooks" ? "active" : ""} onClick={handleBooks}>
                My Books
              </li>
              <li className={activeTab === "MyFavourite" ? "active" : ""} onClick={handleFav}>
                My Favourite
              </li>
              <li className={activeTab === "MyReadingGoals" ? "active" : ""} onClick={handleGoals}>
                My Reading Goals
              </li>
              <li className={activeTab === "MyWishlist" ? "active" : ""} onClick={handleWishlist}>
                My Wishlist
              </li>
            </ul>
            <div className="child-tabs">
              {activeTab === "MyBooks" ? (
                <MyBooks />
              ) : activeTab === "MyFavourite" ? (
                <MyFavourite />
              ) : activeTab === "MyReadingGoals" ? (
                <MyReadingGoals />
              ) : activeTab === "MyWishlist" ? (
                <MyWishlist />
              ) : (
                <></>
              )}
            </div>
          </>
        ) : tabName === "discover" ? (
          <>
            <ul className="nav-discover">
              <li className={activeTab === "Discover" ? "active" : ""} onClick={handleDiscover}>
                Discover
              </li>
              <li className={activeTab === "Genre" ? "active" : ""} onClick={handleGenre}>
                Genre
              </li>
            </ul>
            <div className="child-tabs">
              {activeTab === "Discover" ? (
                <DiscoverTab />
              ) : activeTab === "Genre" ? (
                <GenreTab />
              ) : activeTab === "trending" ? (
                <TrendingTab />
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <>
            <ul className="nav-book">
              <li className={activeTab === "About" ? "active" : ""} onClick={handleAbout}>
                About This Book
              </li>
              <li className={activeTab === "Reviews" ? "active" : ""} onClick={handleReview}>
                Reviews
              </li>
            </ul>

            <div className="child-tabs">
              {activeTab === "About" ? (
                <AboutBookTab />
              ) : activeTab === "Reviews" ? (
                <ReviewTab />
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tab;
