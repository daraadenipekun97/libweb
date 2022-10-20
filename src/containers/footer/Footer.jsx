import React from 'react';
import './footer.css';
import Logo from '../../assets/images/myLibriBooks.png'

import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle  } from "react-icons/ai"



const Footer = () => {
  return (
    <div className='lib-footer-container'>
        <div className="lib-footer-wrapper">

       
        <div className="lib-footer-logo">
            <img src={Logo} alt="Logo" />
        </div>

        <div className="lib-footer-links-div">
            <h4>Company</h4>
            <p><a href="#home">About Us</a></p>
            <p><a href="#home">FAQs</a></p>
        </div>

        <div className="lib-footer-links-div">
            <h4>Social</h4>
            <div className="lib-socials-icon">
                <p><a href="#home"><AiFillFacebook size = {20}  /></a></p>
                <p><a href="#home"><AiFillInstagram size = {20}  /></a></p>
                <p><a href="#home"><AiFillTwitterCircle size = {20}  /></a></p>
            </div>   
        </div>

        <div className="lib-footer-links-div">
            <h4>Terms and Policy</h4>
            <p><a href="#home">Privacy Policy</a></p>
            <p><a href="#home">Terms of Use</a></p>
        </div>

        <div className="lib-footer-links-div">
            <h4>Contact Us</h4>
            <p><a href="#home">Assistance</a></p>
            <p><a href="#home">Complaints</a></p>
            <p><a href="#home">Enquiries</a></p>
            <p><a href="#home">Feedback & Suggestion</a></p>
        </div>
    </div>
        <div className="lib-footer-copyright">
            <p>Copyright © The Libri Limited 2022.</p>
        </div>


    </div>
  )
}

export default Footer