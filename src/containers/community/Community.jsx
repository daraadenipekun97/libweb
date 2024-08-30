import React from "react";
import "./community.css";

import CommunityImg from "../../assets/images/Communitypng.png";

const Community = () => {
  return (
    <div className="lib-community-wrapper">
      <div className="lib-community-left-wrapper">
        <h1>Join our community of readers</h1>
        <p>
          Join our Facebook community of book enthusiasts from the best book lovers site in Africa
          to stay updated on new releases, author interviews, and literary events
        </p>
        <a
          href="https://www.facebook.com/groups/5205409852862649"
          className="lib-community-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>

      <div className="lib-community-right-wrapper">
        <img src={CommunityImg} alt="community" />
      </div>
    </div>
  );
};

export default Community;
