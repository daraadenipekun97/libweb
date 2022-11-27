import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import "./discover.css";
import { Footer } from "../../containers";
import Tab from "../../components/tab/Tab";

const Discover = () => {
  return (
    <>
      <UserNavbar />
      <Tab tabName="discover" />
      <Footer />
    </>
  );
};

export default Discover;
