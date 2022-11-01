import React from "react";
import "./landingPage.css";

import { Navbar, Header, Footer, Explore, DownloadApp, Community } from "../../containers";

const LandingPage = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Explore />
      <DownloadApp />
      <Community />
      <Footer />
    </div>
  );
};

export default LandingPage;
