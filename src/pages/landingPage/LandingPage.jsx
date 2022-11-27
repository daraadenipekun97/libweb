import React, { useState, useEffect, lazy, Suspense } from "react";
import "./landingPage.css";

// import { Navbar, Header, Footer, Explore, DownloadApp, Community } from "../../containers";
import Preloader from "../../components/preloader/Preloader";

const Navbar = lazy(() => import("../../containers/navbar/Navbar"));
const Header = lazy(() => import("../../containers/header/Header"));
const Footer = lazy(() => import("../../containers/footer/Footer"));
const Explore = lazy(() => import("../../containers/explore/Explore"));
const DownloadApp = lazy(() => import("../../containers/downloadApp/DownloadApp"));
const Community = lazy(() => import("../../containers/community/Community"));

const LandingPage = ({ user }) => {
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
        </Suspense>
      </div>
    </>
  );
};

export default LandingPage;
