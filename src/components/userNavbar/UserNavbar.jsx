import React, { useState, useEffect } from "react";
import "./userNavbar.css";
import Logo from "../../assets/images/myLibriBooks.png";
import Avatar from "../../assets/images/avatar.png";
import { AiFillCaretDown } from "react-icons/ai";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { toastr } from "react-redux-toastr";

const UserNavbar = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(false);

  // const clientId = '893028334475-6o02i3mott60lp08b9tugapak12j6hr7.apps.googleusercontent.com'

  const clientId = "218460719300-c7mfmeul7tjt7fhrosljpni5kmmmeobd.apps.googleusercontent.com";

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: "profile email",
      });
    };
    gapi.load("client:auth2", initClient);
  });

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
    const auth2 = gapi.auth2.getAuthInstance();

    if (auth2 != null) {
      auth2.signOut().then(auth2.disconnect().then(console.log("LOGOUT SUCCESSFUL")));
    }

    localStorage.clear();
    navigate("/");
    window.location.reload();
    // toastr.success("Logout Successful", "See you later");
  };

  return (
    <>
      <nav className="navbar">
        <a className="logo" href="#">
          <img src={Logo} alt="" />
        </a>
        <div className="toggle-button" onClick={() => handleNavbar()}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="profile_dropdown">
          <ul>
            <li>
              <a href="#">
                {userDataLogin !== null
                  ? userDataLogin.user.name
                  : userRegData !== null
                  ? userRegData.user.name
                  : ""}
              </a>
            </li>
            <li onClick={handleLogout}>Log out</li>
          </ul>
        </div>

        <div className="navbar-links">
          <ul>
            <li>
              <a href="/home/dashboard">Home</a>
            </li>
            <li>
              <a href="/home/library">My Library</a>
            </li>
            <li>
              <a href="/home/discover">Discover</a>
            </li>
          </ul>
          <div className="search">
            <input type="text" placeholder="search for a book" />
            <button className="search_btn">Search</button>
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
