import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleBook from "../../components/singleBook/SingleBook";

import { fetchAllTrendingBooks } from "../../Actions";

const TrendingTab = () => {
  const dispatch = useDispatch();
  const { trendingBooks } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchAllTrendingBooks());
  }, [dispatch]);

  return <SingleBook datas={trendingBooks} searchBar="" title="Trending Books" />;
};

export default TrendingTab;
