import React, { useState, useEffect } from "react";
import "./userNavbar.css";
import Logo from "../../assets/images/myLibriBooks.png";
import Avatar from "../../assets/images/avatar.png";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toastr } from "react-redux-toastr";
import { useDispatch } from "react-redux";
import { googleLogout } from '@react-oauth/google';


const UserNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialFormValues = {
    search: "",
  };

  const [formValues, setFormValues] = useState({ ...initialFormValues });


  // const clientIdLocal:3000 = '893028334475-6o02i3mott60lp08b9tugapak12j6hr7.apps.googleusercontent.com'




  const handleProfile = () => {
    const profileBox = document.getElementsByClassName("profile_dropdown")[0];

    profileBox.classList.toggle("show");
  };

  const handleNavbar = () => {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    const profileBox = document.getElementsByClassName("profile_dropdown")[0];
    navbarLinks.classList.toggle("active");
    profileBox.classList.remove("show");
  };

  const userDataLogin = JSON.parse(localStorage.getItem("userLoginData"));
  const userRegData = JSON.parse(localStorage.getItem("userRegData"));

  const handleLogout = () => {
   
    googleLogout();
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const handleProfileNavigate = () => {
    navigate("/home/profile");
  };

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
      navigate(`/home/search/${formValues.search}`);
      setFormValues({ ...initialFormValues });
    } else {
      toastr.warning("Search Book", "Please enter a search term");
    }
  };

  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    if (window.location.pathname === "/home/dashboard") {
      setActiveTab("dashboard");
    } else if (window.location.pathname === "/home/library") {
      setActiveTab("lib");
    } else if (window.location.pathname === "/home/discover") {
      setActiveTab("discover");
    }
  }, [dispatch, window.location.pathname]);

  const handleHome = () => {
    navigate("/home/dashboard");
  };

  const handleLibrary = () => {
    navigate("/home/library");
  };

  const handleDiscover = () => {
    navigate("/home/discover");
  };

  const handleDashboard = () => {
    navigate("/home/dashboard");
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo" onClick={handleDashboard}>
          <img src={Logo} alt="" />
        </div>
        <div className="toggle-button" onClick={() => handleNavbar()}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="profile_dropdown">
          <ul>
            <li onClick={handleProfileNavigate}>
              {userDataLogin !== null
                ? userDataLogin.user.name
                : userRegData !== null
                ? userRegData.user.name
                : ""}
            </li>
            <li onClick={handleLogout}>Log out</li>
          </ul>
        </div>

        <div className="navbar-links">
          <ul>
            <li className={activeTab === "dashboard" ? "active" : ""} onClick={handleHome}>
              Home
            </li>
            <li className={activeTab === "lib" ? "active" : ""} onClick={handleLibrary}>
              My Library
            </li>
            <li className={activeTab === "discover" ? "active" : ""} onClick={handleDiscover}>
              Discover
            </li>
          </ul>
          <div className="search">
            <input
              type="text"
              placeholder="Book,Genre,Author"
              onChange={(e) => searchTextHandler(e)}
              value={formValues.search}
            />
            <button className="search_btn" onClick={() => handleSearch()}>
              Search
            </button>
          </div>
          <div className="profile" onClick={() => handleProfile()}>
            <img src={Avatar} alt="" className="profile_pic" />
            <AiFillCaretDown size={20} color="#5e458b" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
