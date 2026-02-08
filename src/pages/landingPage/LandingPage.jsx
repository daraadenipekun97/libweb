import React, { useState, useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBanners } from "../../Actions";

import "./landingPage.css";

// import { Navbar, Header, Footer, Explore, DownloadApp, Community } from "../../containers";
import Preloader from "../../components/preloader/Preloader";
import NotificationModal from "../../containers/modal/NotificationModal";

const Navbar = lazy(() => import("../../containers/navbar/Navbar"));
const Header = lazy(() => import("../../containers/header/Header"));
const Footer = lazy(() => import("../../containers/footer/Footer"));
const Explore = lazy(() => import("../../containers/explore/Explore"));
const DownloadApp = lazy(() => import("../../containers/downloadApp/DownloadApp"));
const Features = lazy(() => import("../../containers/features/Features"));
const Community = lazy(() => import("../../containers/community/Community"));

const LandingPage = ({ user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(true);

  const { allBanners } = useSelector((state) => state.getAll);

  useEffect(() => {
    dispatch(fetchAllBanners());
  }, [dispatch]);

  useEffect(() => {
    if (location.state?.scrollToInput) {
      const input = document.querySelector("#target-input");
      if (input) {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
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
          {/* <DownloadApp /> */}
          <Features/>
          <Community />
          <Footer />
          {allBanners.length !== 0 ? (
            <NotificationModal
              showNotification={showNotification}
              setShowNotification={setShowNotification}
              allBanners={allBanners}
            />
          ) : (
            <></>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default LandingPage;
