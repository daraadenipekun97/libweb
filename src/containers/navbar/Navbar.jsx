import React, { useState } from "react";

import "./navbar.css";

import Logo from "../../assets/images/myLibriBooks.png";
import { PurpleButton } from "../../components/button/Button";

import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#home">Discover</a>
    </p>
    <p>
      <a href="signin">Sign In</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="lib-navbar">
      <a href="/" className="lib-navbar-logo">
        <img src={Logo} alt="Logo" />
      </a>
      <div className="lib-navbar-links-container">
        <Menu />
      </div>
      <a href="register" className="btn-wrapper">
        Get Started
      </a>
      <div className="lib-navbar-menu ">
        {toggleMenu ? (
          <AiOutlineCloseCircle size={27} color="#5e458b" onClick={() => setToggleMenu(false)} />
        ) : (
          <AiOutlineMenu size={27} color="#5e458b" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="lib-navbar-menu-container scale-up-center">
            <div className="lib-navbar-menu-container-links">
              <Menu />
              <PurpleButton text="Get Started" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
