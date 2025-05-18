import React, { useState, useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import "./landingPage.css";

// import { Navbar, Header, Footer, Explore, DownloadApp, Community } from "../../containers";
import Preloader from "../../components/preloader/Preloader";
import NotificationModal from "../../containers/modal/NotificationModal";

const Navbar = lazy(() => import("../../containers/navbar/Navbar"));
const Header = lazy(() => import("../../containers/header/Header"));
const Footer = lazy(() => import("../../containers/footer/Footer"));
const Explore = lazy(() => import("../../containers/explore/Explore"));
const DownloadApp = lazy(() => import("../../containers/downloadApp/DownloadApp"));
const Community = lazy(() => import("../../containers/community/Community"));

const LandingPage = ({ user }) => {
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(true);


  useEffect(() => {
    if (location.state?.scrollToInput) {
      const input = document.querySelector('#target-input');
      if (input) {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          input.focus();
        }, 500);
      }
    }
  }, [location.state]);

  return (
    <>
      <div className="app">
        <Suspense fallback={<Preloader />}>
          <Navbar user={user} />
          <Header />
          <Explore />
          <DownloadApp />
          <Community />
          <Footer />
          <NotificationModal showNotification={showNotification} setShowNotification={setShowNotification} />
        </Suspense>
      </div>
    </>
  );
};

export default LandingPage;
