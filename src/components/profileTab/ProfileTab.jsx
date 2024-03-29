import React, { useState, useEffect } from "react";
import "./profileTab.css";
import { useNavigate } from "react-router-dom";

import { AiOutlineLogout } from "react-icons/ai";

import Bio from "../allProfileTab/Bio";
import WalletTab from "../allProfileTab/WalletTab";
import Subscription from "../allProfileTab/Subscription";
import ChangePassword from "../allProfileTab/ChangePassword";
import { googleLogout } from "@react-oauth/google";

const ProfileTab = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Bio");

  const handleBio = () => {
    setActiveTab("Bio");
  };

  const handleWallet = () => {
    setActiveTab("Wallet");
  };

  const handleSub = () => {
    setActiveTab("Sub");
  };

  const handlePassword = () => {
    setActiveTab("Password");
  };

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="profile-tab-container">
      <div className="sidebar-content">
        <ul className="lists">
          <li className={activeTab === "Bio" ? "active" : ""} onClick={handleBio}>
            Bio Data
          </li>
          <li className={activeTab === "Wallet" ? "active" : ""} onClick={handleWallet}>
            Wallet
          </li>
          <li className={activeTab === "Sub" ? "active" : ""} onClick={handleSub}>
            Subscription
          </li>
          <li className={activeTab === "Password" ? "active" : ""} onClick={handlePassword}>
            Change Password
          </li>
          <li className="list" onClick={handleLogout}>
            <AiOutlineLogout /> &nbsp; Log Out
          </li>
        </ul>
      </div>
      <div className="sidbar-tabs">
        {activeTab === "Bio" ? (
          <Bio />
        ) : activeTab === "Wallet" ? (
          <WalletTab />
        ) : activeTab === "Sub" ? (
          <Subscription />
        ) : activeTab === "Password" ? (
          <ChangePassword />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProfileTab;
