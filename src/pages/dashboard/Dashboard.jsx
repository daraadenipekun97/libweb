import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import SingleBook from "../../components/singleBook/SingleBook";
import "./dashboard.css";
import { fetchAllTrendingBooks } from "../../Actions";
import { Footer, Header } from "../../containers";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { trendingBooks } = useSelector((state) => state.books);

  const [slicedTrendingBooks, setSlicedTrendingBooks] = useState([]);

  useEffect(() => {
    dispatch(fetchAllTrendingBooks());
  }, []);

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

  return (
    <>
      <UserNavbar />
      <Header />
      <div className="book-container">
        <SingleBook datas={slicedTrendingBooks} searchBar={false} title="Trending Books" />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
