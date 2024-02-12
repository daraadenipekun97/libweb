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

  const handleNavigate = () => {
    navigate("/home/writingChallenge");
  };

  return (
    <div className="action-banner-wrapper">
      <marquee
        direction="left"
        ref={marqueeRef}
        onMouseOver={stopMarquee}
        onMouseOut={startMarquee}
      >
        Join our writing challenge and stand a chance to win up to $150 and one year mylibri books
        subscription👉
        <span className="action-start-now" onClick={handleNavigate}>
          <em>Start Now</em>
        </span>
      </marquee>
    </div>
  );
};

export default ActionBanner;
