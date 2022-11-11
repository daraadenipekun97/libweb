import React, {useState, useEffect} from "react";
import "./landingPage.css";

import { Navbar, Header, Footer, Explore, DownloadApp, Community } from "../../containers";
import Preloader from "../../components/preloader/Preloader";

const LandingPage = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>

    {
      loading ? <Preloader /> : (
        <div className="app">
        <Navbar />
        <Header />
        <Explore />
        <DownloadApp />
        <Community />
        <Footer />
      </div>
      )
    }
    </>
   
  );
};

export default LandingPage;
