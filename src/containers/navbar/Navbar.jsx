import React, { useState } from "react";

import "./navbar.css";

import Logo from "../../assets/images/myLibriBooks.png";
import { PurpleButton } from "../../components/button/Button";

import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Menu = ({handleHome}) => (



  <>
    <p>
      <a href="#" onClick={handleHome}>Home</a>
    </p>
    <p>
      <a href="#" onClick={handleHome} >Discover</a>
    </p>
    <p>
      <a href="signin">Sign In</a>
    </p>
  </>
);

const Navbar = ({user}) => {
  const navigate = useNavigate();

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleHome = () =>{

    const hanldeSwal = () =>{
      Swal.fire({
        title: 'Please Login',
        icon: 'warning',
        showDenyButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        confirmButtonText: 'Ok',
        denyButtonText: `Don't save`,
        confirmButtonColor: '#5e458b',
        width: 400,
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin")
         
  
  
        } 
        // else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
        // }
      })
    }


    if(user)  {
      navigate("/home/dashboard")
    }
    else{
      hanldeSwal()

    }
    
    return false
  }

  return (
    <div className="lib-navbar">
      <a href="/" className="lib-navbar-logo">
        <img src={Logo} alt="Logo" />
      </a>
      <div className="lib-navbar-links-container">
        <Menu  handleHome={handleHome}/>
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
