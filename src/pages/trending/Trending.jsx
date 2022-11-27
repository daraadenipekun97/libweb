import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import SingleBook from "../../components/singleBook/SingleBook";
import "./trending.css";
import { fetchAllTrendingBooks } from "../../Actions";
import { Footer } from "../../containers";
import Tab from "../../components/tab/Tab";

const Trending = () => {
  const dispatch = useDispatch();
  const { trendingBooks } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchAllTrendingBooks());
  }, []);

  return (
    <>
      <UserNavbar />
      <Tab tabName="discover" />
      <Footer />
    </>
  );
};

export default Trending;
