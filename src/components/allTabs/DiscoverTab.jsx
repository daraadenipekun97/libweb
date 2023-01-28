import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleBook from "../../components/singleBook/SingleBook";

import {
  fetchAllTrendingBooks,
  fetchPopularAuthors,
  fetchNewReleases,
  fetchKiddiesBooks,
  fetchClassicBooks,
} from "../../Actions";
import SingleAuthor from "../singleAuthor/SingleAuthor";

const DiscoverTab = () => {
  const dispatch = useDispatch();
  const { trendingBooks, popularAuthors, newReleases, classicBooks, kiddiesBooks } = useSelector(
    (state) => state.books
  );

  const [slicedTrendingBooks, setSlicedTrendingBooks] = useState([]);
  const [slicedPopularAuthors, setSlicedPopularAuthors] = useState([]);
  const [slicedNewReleases, setSlicedNewReleases] = useState([]);
  const [slicedClassicBooks, setSlicedClassicBooks] = useState([]);
  const [slicedKiddiesBooks, setSlicedKiddiesBooks] = useState([]);
  const [childStat, setChildStat] = useState(false);
  useEffect(() => {
    dispatch(fetchAllTrendingBooks());
    dispatch(fetchPopularAuthors());
    dispatch(fetchNewReleases());
    dispatch(fetchClassicBooks());
    dispatch(fetchKiddiesBooks());

    const userDataRegister = JSON.parse(localStorage.getItem("userRegData"));
    const userDataLogin = JSON.parse(localStorage.getItem("userLoginData"));

    let childStatus =
      userDataRegister !== null
        ? userDataRegister.user.child
        : userDataLogin !== null
        ? userDataLogin.user.child
        : "";

    setChildStat(childStatus);
  }, [dispatch]);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  useEffect(() => {
    if (trendingBooks.length !== 0) {
      const slicedTrending = getMultipleRandom(trendingBooks, 10);
      setSlicedTrendingBooks(slicedTrending);
    }
  }, [trendingBooks]);

  useEffect(() => {
    if (popularAuthors.length !== 0) {
      const slicedPopularAuthors = getMultipleRandom(popularAuthors, 18);
      setSlicedPopularAuthors(slicedPopularAuthors);
    }
  }, [popularAuthors]);

  useEffect(() => {
    if (newReleases.length !== 0) {
      const slicedNewReleases = getMultipleRandom(newReleases, 15);
      setSlicedNewReleases(slicedNewReleases);
    }
  }, [newReleases]);

  useEffect(() => {
    if (classicBooks.length !== 0) {
      const slicedClassicBooks = getMultipleRandom(classicBooks, 15);
      setSlicedClassicBooks(slicedClassicBooks);
    }
  }, [classicBooks]);

  useEffect(() => {
    if (kiddiesBooks.length !== 0) {
      const slicedKiddiesBooks = getMultipleRandom(kiddiesBooks, 15);
      setSlicedKiddiesBooks(slicedKiddiesBooks);
    }
  }, [kiddiesBooks]);

  return (
    <div className="discover-container">
      <SingleBook datas={slicedTrendingBooks} searchBar={false} title="Trending Books" />
      {childStat ? (
        <></>
      ) : (
        <SingleAuthor datas={slicedPopularAuthors} title="Popular Authors" seeAllText={true} />
      )}
      <SingleBook datas={slicedNewReleases} searchBar={false} title="New Releases Books" />
      <SingleBook datas={slicedClassicBooks} searchBar={false} title="Classic Books" />
      <SingleBook
        datas={slicedKiddiesBooks}
        searchBar={false}
        title="Educational & Kiddies Books"
      />
    </div>
  );
};

export default DiscoverTab;
