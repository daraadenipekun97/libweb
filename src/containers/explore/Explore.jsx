import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./explore.css";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchAllTrendingBooksUnauth } from "../../Actions";

const Explore = () => {
  const dispatch = useDispatch();
  const { trendingBooksUnauth } = useSelector((state) => state.books);

  const [slicedTrendingBooks, setSlicedTrendingBooks] = useState([]);

  useEffect(() => {
    dispatch(fetchAllTrendingBooksUnauth());
  }, [dispatch]);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  useEffect(() => {
    if (trendingBooksUnauth.length !== 0) {
      const slicedTrending = getMultipleRandom(trendingBooksUnauth, 10);
      setSlicedTrendingBooks(slicedTrending);
    }
  }, [trendingBooksUnauth]);

  return (
    <div className="lib-explore">
      <div className="lib-explore-top-items">
        <h1>Get access to Africa’s Largest Libri</h1>
        <p>Explore the books you love, and also discover new and exciting authors</p>
      </div>

      <SingleBook searchBar={true} datas={slicedTrendingBooks} title="Trending Books" />
    </div>
  );
};

export default Explore;
