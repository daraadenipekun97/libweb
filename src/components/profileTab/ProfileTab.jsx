import React, {useState, useEffect} from 'react';
import "./profileTab.css";

import { AiOutlineUser, AiOutlineWallet, AiOutlineInteraction, AiOutlineLock, AiOutlineLogout } from "react-icons/ai";

import Bio from "../allProfileTab/Bio";
import WalletTab from "../allProfileTab/WalletTab";
import Subscription from "../allProfileTab/Subscription";
import ChangePassword from "../allProfileTab/ChangePassword"

const ProfileTab = () => {

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

  return (
    <div className='profile-tab-container'>
        <div class="sidebar-content">
          <ul class="lists">
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
            <li class="list">
                <AiOutlineLogout/> &nbsp; Log Out 
            </li>
            </ul>
        </div>
        <div className="sidbar-tabs">
        {activeTab === "Bio" ? (
              <Bio />
            ) : activeTab === "Wallet" ? (
                <WalletTab/>
                ) : activeTab === "Sub" ? (
                    <Subscription/>
                    ) : activeTab === "Password" ? (
                        <ChangePassword/>
                        ) : (
              <></>
            )}
        </div>
    </div>
  )
}

export default ProfileTab