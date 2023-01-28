import React, { useState, useEffect } from "react";
import "./profile.css";
import ProfileTab from "../../components/profileTab/ProfileTab";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";

const Profile = () => {
  return (
    <>
      <UserNavbar />
      <div className="profile-page-container">
        <ProfileTab />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
