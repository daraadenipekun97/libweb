import React from "react";
import "./header.css";
import Hero from "../../assets/images/HeroSectionNoBkg.png";

const Header = () => {
  return (
    <div className="lib-header section-padding">
      <div className="lib-header-content">
        <h1>Africa’s Biggest Digital Libri</h1>
        <p className="lib-header-paragraph">Your Libri, in the palm of your hands</p>
        <div className="lib-download-app">
          <a
            href="https://apps.apple.com/us/app/mylibri-books/id1528198803"
            className="lib-store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="lib-store-wrapper">
              <svg width="1.5rem" height="1.5625rem" viewBox="0 0 24 25" fill="none">
                <g clipPath="url(#apple-logo-clip-path)" fill="white">
                  <path d="M16.499.5c-1.28.088-2.775.907-3.646 1.974-.796.967-1.45 2.404-1.194 3.801 1.397.043 2.842-.795 3.679-1.88.783-1.009 1.376-2.437 1.161-3.895z"></path>
                  <path d="M21.555 8.552c-1.228-1.54-2.955-2.435-4.585-2.435-2.153 0-3.063 1.03-4.559 1.03-1.542 0-2.713-1.027-4.575-1.027-1.828 0-3.775 1.118-5.01 3.029-1.735 2.69-1.438 7.75 1.374 12.06 1.007 1.542 2.35 3.276 4.109 3.29 1.564.016 2.005-1.003 4.125-1.013 2.12-.012 2.521 1.027 4.083 1.01 1.76-.013 3.177-1.934 4.183-3.476.722-1.106.99-1.662 1.55-2.91-4.07-1.55-4.722-7.337-.695-9.558z"></path>
                </g>
                <defs>
                  <clipPath id="apple-logo-clip-path">
                    <path fill="currentColor" transform="translate(0 .5)" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="lib-store-text-wrapper">
                <p className="lib-store-text-normal">Download on the </p>
                <p className="lib-store-text-bold">App Store</p>
              </div>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.libribooks"
            className="lib-store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="lib-store-wrapper">
              <svg width="1.5rem" height="1.5625rem" viewBox="0 0 24 25" fill="none">
                <g clipPath="url(#play-store-logo-clip-path)">
                  <path
                    d="M4.66955 0.877687C4.1228 0.52439 3.46608 0.417609 2.8501 0.563015L13.675 11.388L17.1834 7.87959L4.66955 0.877687Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M1.50669 1.44287C1.20477 1.84426 1.03101 2.33711 1.03101 2.85845V22.1409C1.03101 22.6622 1.20482 23.155 1.50669 23.5564L12.5634 12.4997L1.50669 1.44287Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M21.7623 10.4415L18.6092 8.67725L14.7869 12.4996L18.6094 16.3222L21.7628 14.5578C22.5183 14.1345 22.9693 13.3652 22.9693 12.4996C22.9693 11.634 22.5183 10.8648 21.7623 10.4415Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M13.6751 13.6116L2.85083 24.4359C3.0283 24.4776 3.20891 24.5001 3.38952 24.5001C3.83586 24.5001 4.28066 24.3732 4.66967 24.1218L17.1837 17.12L13.6751 13.6116Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="play-store-logo-clip-path">
                    <rect
                      width="24"
                      height="24"
                      fill="currentColor"
                      transform="translate(0 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="lib-store-text-wrapper">
                <p className="lib-store-text-normal">Download on the </p>
                <p className="lib-store-text-bold">Play Store</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="lib-header-image">
        <img src={Hero} alt="hero" />
      </div>
    </div>
  );
};

export default Header;
