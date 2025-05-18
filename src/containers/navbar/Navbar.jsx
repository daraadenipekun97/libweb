import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./navbar.css";

import Logo from "../../assets/images/myLibriBooks.png";
import { PurpleButton } from "../../components/button/Button";

import { AiOutlineCloseCircle, AiOutlineMenu, AiOutlineArrowDown, AiOutlineSearch  } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Menu = ({ handleHome, handleScroll, handleSignin, handleBlog, handleHover, handleHoverLeave }) => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (window.location.pathname === "/") {
      setActiveTab("home");
    } else if (window.location.pathname === "/signin") {
      setActiveTab("signin");
    }else if(window.location.pathname === "/blog"){
      setActiveTab("blog");
    }
  }, [dispatch, window.location.pathname]);

  return (
    <>
      <p className={activeTab === "home" ? "active" : ""} onClick={handleHome}>
        Home
      </p>
      <p className="company-link"
        onMouseEnter={handleHover}
        // onMouseLeave={handleHoverLeave}
      >
        Company <AiOutlineArrowDown size={20}   />
      </p>
      <p 
      className="company-link"
      onClick={handleScroll}>
        Search
        <AiOutlineSearch size={20} />
      </p>
      <p className={activeTab === "blog" ? "active" : ""} onClick={handleBlog}>Blog</p>
      <p className={activeTab === "signin" ? "active" : ""} onClick={handleSignin}>
        Sign In
      </p>
    </>
  );
};

const MenuCompany = ({ handleAboutUs, handleFaq }) => {


  return (
    <>
      <p  onClick={handleAboutUs}>About Us</p>
      <p  onClick={handleFaq}>FAQ</p>
    </>
  );
};

const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleCompanyMenu, setToggleCompanyMenu] = useState(false);


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

  const handleBlog = () => {
    navigate("/blog")
  }

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

  const handleScroll = () => {
    const currentPath = window.location.pathname;
  
    if (currentPath !== "/") {
      navigate("/", { state: { scrollToInput: true } });
    } else {
      scrollAndFocusInput();
    }
  };
  


  const scrollAndFocusInput = () => {
    const input = document.querySelector('#target-input');
    if (input) {
      input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
      // Focus after scroll finishes
      setTimeout(() => {
        input.focus();
      }, 500); // Adjust delay if needed
    }
  };
  

  const handleHomeNav = () => {
    navigate("/");
  };

  const handleGetStarted = () => {
    navigate("/register");
  };

  const handleHover = () => {
    setToggleCompanyMenu(true)
    setToggleMenu(false)
  }

  const handleHoverLeave = () => {
    setToggleCompanyMenu(false)
  }
  const  handleOpenDropDown = () => {
    setToggleMenu(true); 
    setToggleCompanyMenu(false);
  }

  const handleAboutUs = () => {
    navigate("/about");

  }

  const handleFaq = () => {
    navigate("/faq")
  }

  return (
    <div className="lib-navbar">
      <div className="lib-navbar-logo" onClick={handleHomeNav}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="lib-navbar-links-container">
        <Menu handleHome={handleHome} handleScroll={handleScroll} handleSignin={handleSignin} handleBlog={handleBlog} handleHover={handleHover} handleHoverLeave = {handleHoverLeave} />
      </div>
      {toggleCompanyMenu && (
          <div className="lib-navbar-menu-container-company scale-up-center"  onMouseLeave={handleHoverLeave}>
            <div className="lib-navbar-menu-container-links">
              <MenuCompany
                handleAboutUs={handleAboutUs}
                handleFaq={handleFaq}
              />
            </div>
          </div>
        )}
      <div className="btn-wrapper" onClick={handleGetStarted}>
        Get Started
      </div>
      <div className="lib-navbar-menu ">
        {toggleMenu ? (
          <AiOutlineCloseCircle size={27} color="#5e458b" onClick={() => setToggleMenu(false)} />
        ) : (
          <AiOutlineMenu size={27} color="#5e458b" onClick={handleOpenDropDown} />
        )}
        {toggleMenu && (
          <div className="lib-navbar-menu-container scale-up-center">
            <div className="lib-navbar-menu-container-links">
              <Menu
                handleHome={handleHome}
                handleScroll={handleScroll}
                handleSignin={handleSignin}
                handleBlog={handleBlog}
                handleHover={handleHover}
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
