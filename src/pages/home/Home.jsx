import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user || location.pathname === "/home") {
      navigate("/");
    }
    //    if(user && (location.pathname === "/")){
    //      alert("Hello")
    // }
  });

  return <Outlet />;
};

export default Home;
