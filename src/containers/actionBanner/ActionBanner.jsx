import React, { useRef } from "react";
import "./actionbanner.css";
import { useNavigate, useLocation } from "react-router-dom";

const ActionBanner = () => {
  const navigate = useNavigate();
  const marqueeRef = useRef(null);

  const stopMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const startMarquee = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  const handleScroll = () => {
    // navigate("/home/writingChallenge");
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Optional: adds smooth scrolling animation
    });
  };

  return (
    <div className="action-banner-wrapper" onClick={handleScroll}>
      <marquee
        direction="left"
        ref={marqueeRef}
        onMouseOver={stopMarquee}
        onMouseOut={startMarquee}
      >
        Click here to win $150 and 1 year subscription
        {/* <span className="action-start-now">
          <em>Start Now</em>
        </span> */}
      </marquee>
    </div>
  );
};

export default ActionBanner;
