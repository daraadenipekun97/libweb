import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./navbar.css";

import Logo from "../../assets/images/myLibriBooks.png";
import { PurpleButton } from "../../components/button/Button";

import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Menu = ({ handleHome, handleDiscover, handleSignin }) => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (window.location.pathname === "/") {
      setActiveTab("home");
    } else if (window.location.pathname === "/signin") {
      setActiveTab("signin");
    }
  }, [dispatch, window.location.pathname]);

  return (
    <>
      <p className={activeTab === "home" ? "active" : ""} onClick={handleHome}>
        Home
      </p>
      <p onClick={handleDiscover}>Discover</p>
      <p className={activeTab === "signin" ? "active" : ""} onClick={handleSignin}>
        Sign In
      </p>
    </>
  );
};

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleHome = () => {
    if (user) {
      navigate("/home/dashboard");
    } else {
      navigate("/");
    }
  };

  const handleSignin = () => {
    navigate("/signin");
  };

  const handleDiscover = () => {
    const hanldeSwal = () => {
      Swal.fire({
        title: "Please Login",
        icon: "warning",
        showDenyButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: "Ok",
        denyButtonText: `Don't save`,
        confirmButtonColor: "#5e458b",
        width: 400,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
        // else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
        // }
      });
    };

    if (user) {
      navigate("/home/discover");
    } else {
      hanldeSwal();
    }
  };

  const handleHomeNav = () => {
    navigate("/");
  };

  const handleGetStarted = () => {
    navigate("/register");
  };

  return (
    <div className="lib-navbar">
      <div className="lib-navbar-logo" onClick={handleHomeNav}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="lib-navbar-links-container">
        <Menu handleHome={handleHome} handleDiscover={handleDiscover} handleSignin={handleSignin} />
      </div>
      <div className="btn-wrapper" onClick={handleGetStarted}>
        Get Started
      </div>
      <div className="lib-navbar-menu ">
        {toggleMenu ? (
          <AiOutlineCloseCircle size={27} color="#5e458b" onClick={() => setToggleMenu(false)} />
        ) : (
          <AiOutlineMenu size={27} color="#5e458b" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="lib-navbar-menu-container scale-up-center">
            <div className="lib-navbar-menu-container-links">
              <Menu
                handleHome={handleHome}
                handleDiscover={handleDiscover}
                handleSignin={handleSignin}
              />
              <PurpleButton text="Get Started" onClickFunction={handleGetStarted} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
