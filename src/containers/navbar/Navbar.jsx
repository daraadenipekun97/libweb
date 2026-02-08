import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./navbar.css";

import Logo from "../../assets/images/myLibriBooks.png";
import { PurpleButton } from "../../components/button/Button";

import {
  AiOutlineCloseCircle,
  AiOutlineMenu,
  AiOutlineArrowDown,
  AiOutlineSearch,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Menu = ({
  handleHome,
  handleScroll,
  handleSignin,
  handleBlog,
  handleHover,
  handleHoverLeave,
}) => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    if (window.location.pathname === "/") {
      setActiveTab("home");
    } else if (window.location.pathname === "/signin") {
      setActiveTab("signin");
    } else if (window.location.pathname === "/blog") {
      setActiveTab("blog");
    }
  }, [dispatch, window.location.pathname]);

  return (
    <>
      <p className={activeTab === "home" ? "header-nav-link-active" : "header-nav-link"} onClick={handleHome}>
        Home
      </p>
      <p
        className="header-nav-link"
        onMouseEnter={handleHover}
        // onMouseLeave={handleHoverLeave}
      >
        Company 
        {/* <AiOutlineArrowDown size={12} /> */}
      </p>
      <p className="header-nav-link" onClick={handleScroll}>
        Search
        {/* <AiOutlineSearch size={12} /> */}
      </p>
      <p className={activeTab === "blog" ? "header-nav-link-active" : "header-nav-link"} onClick={handleBlog}>
        Blog
      </p>
      {/* <p className={activeTab === "signin" ? "active" : ""} onClick={handleSignin}>
        Sign In
      </p> */}
    </>
  );
};

const MenuCompany = ({ handleAboutUs, handleFaq }) => {
  return (
    <>
      <p onClick={handleAboutUs}>About Us</p>
      <p onClick={handleFaq}>FAQ</p>
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
    navigate("/blog");
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

  const handleScroll = () => {
    const currentPath = window.location.pathname;

    if (currentPath !== "/") {
      navigate("/", { state: { scrollToInput: true } });
    } else {
      scrollAndFocusInput();
    }
  };

  const scrollAndFocusInput = () => {
    const input = document.querySelector("#target-input");
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });

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
    setToggleCompanyMenu(true);
    setToggleMenu(false);
  };

  const handleHoverLeave = () => {
    setToggleCompanyMenu(false);
  };
  const handleOpenDropDown = () => {
    setToggleMenu(true);
    setToggleCompanyMenu(false);
  };

  const handleAboutUs = () => {
    navigate("/about");
  };

  const handleFaq = () => {
    navigate("/faq");
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-inner">

      <div className="lib-navbar-logo" onClick={handleHomeNav}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-nav">
        <Menu
          handleHome={handleHome}
          handleScroll={handleScroll}
          handleSignin={handleSignin}
          handleBlog={handleBlog}
          handleHover={handleHover}
          handleHoverLeave={handleHoverLeave}
        />
      </div>
      {toggleCompanyMenu && (
        <div
          className="lib-navbar-menu-container-company scale-up-center"
          onMouseLeave={handleHoverLeave}
        >
          <div className="lib-navbar-menu-container-links">
            <MenuCompany handleAboutUs={handleAboutUs} handleFaq={handleFaq} />
          </div>
        </div>
      )}

         <div className="header-cta">
            <button className="btn btn--ghost btn--sm" onClick={handleSignin}>Sign In</button>
            <button className="btn btn--hero btn--sm" onClick={handleGetStarted}>Get Started</button>
          </div>

        <button
          className="header-menu-btn"
        >
          {toggleMenu ? (
            <AiOutlineCloseCircle size={27} color="#5e458b" onClick={() => setToggleMenu(false)} />
          ) : (
            <AiOutlineMenu size={27} color="#5e458b" onClick={handleOpenDropDown} />
          )}
        </button>
      </div>

        {toggleMenu && (
          <div className="header-mobile-menu">
            <div className="header-mobile-nav">
              <Menu
                handleHome={handleHome}
                handleScroll={handleScroll}
                handleSignin={handleSignin}
                handleBlog={handleBlog}
                handleHover={handleHover}
              />
           <div className="header-mobile-cta">
            <button className="btn btn--ghost btn--sm" onClick={handleSignin}>Sign In</button>
            <button className="btn btn--hero btn--sm" onClick={handleGetStarted}>Get Started</button>
          </div>            
          </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
