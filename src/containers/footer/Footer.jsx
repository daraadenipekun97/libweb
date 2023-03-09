import React from "react";
import "./footer.css";
import Logo from "../../assets/images/myLibriBooks.png";

import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="lib-footer-container">
      <div className="lib-footer-wrapper">
        <div className="lib-footer-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="lib-footer-links-div">
          <h4>Company</h4>
          <p>
            <a href="/about" target="_blank">
              About Us
            </a>
          </p>
          <p>
            <a href="/faq" target="_blank">
              FAQs
            </a>
          </p>
        </div>

        <div className="lib-footer-links-div">
          <h4>Social</h4>
          <div className="lib-socials-icon">
            <p>
              <a
                href="https://www.facebook.com/mylibribooks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook size={20} />
              </a>
            </p>
            <p>
              <a
                href="https://www.instagram.com/mylibribooks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={20} />
              </a>
            </p>
            <p>
              <a href="https://twitter.com/mylibribooks" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle size={20} />
              </a>
            </p>
          </div>
        </div>

        <div className="lib-footer-links-div">
          <h4>Terms and Policy</h4>
          <p>
            <a href="/privacyPolicy" target="_blank">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="/termsOfUse" target="_blank">
              Terms of Use
            </a>
          </p>
        </div>

        <div className="lib-footer-links-div">
          <h4>Contact Us</h4>
          <p>
            <a href="mailto: support@mylibribooks.com">Assistance</a>
          </p>
          <p>
            <a href="mailto: complaints@mylibribooks.com">Complaints</a>
          </p>
          <p>
            <a href="mailto: enquiries@mylibribooks.com">Enquiries</a>
          </p>
          <p>
            <a href="mailto: suggestions@mylibribooks.com">Feedback & Suggestion</a>
          </p>
        </div>
      </div>
      <div className="lib-footer-copyright">
        <p>Copyright © The Libri Limited 2022.</p>
      </div>
    </div>
  );
};

export default Footer;
