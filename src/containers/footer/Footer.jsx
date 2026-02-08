import React, { useState, useEffect } from "react";
import "./footer.css";
import Logo from "../../assets/images/myLibriBooks.png";

import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";


const Footer = () => {

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about"},
      { label: "FAQs", href: "/faq" },
      { label: "Blog", href: "/blog" },
    ],
    terms: [
      { label: "Privacy Policy", href: "/privacyPolicy" },
      { label: "Terms of Use", href: "/termsOfUse" },
    ],
    support: [
      { label: "Assistance", href: "mailto: support@mylibribooks.com" },
      { label: "Complaints", href: "mailto: enquiries@mylibribooks.com" },
      { label: "Enquiries", href: "mailto: enquiries@mylibribooks.com" },
      { label: "Feedback & Suggestion", href: "mailto: support@mylibribooks.com" },
    ],
  };

  const socialLinks = [
    { icon: AiFillFacebook, href: "https://www.facebook.com/mylibribooks", label: "Facebook" },
    { icon: AiFillTwitterCircle, href: "https://twitter.com/mylibribooks", label: "Twitter" },
    { icon: AiFillInstagram, href: "https://www.instagram.com/mylibribooks/", label: "Instagram" },
  ];


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
              <div className="footer-logo-icon">
                 <img src={Logo} alt="Logo" />              
              </div>
            <p className="footer-tagline">
              Africa's largest digital library. Discover the best of African writing on Nigeria's largest reading platform.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="footer-column-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="footer-column-title">Terms and Policy</h4>
            <ul className="footer-links">
              {footerLinks.terms.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="footer-column-title">Contact Us</h4>
            <ul className="footer-links">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link" >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} The Libri Limited. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with ❤️ for African Literature
          </p>
        </div>
      </div>
    </footer>
  );

};

export default Footer;
