import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./explore.css";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchAllTrendingBooksUnauth } from "../../Actions";

const Explore = () => {
  const dispatch = useDispatch();
  const { trendingBooksUnauth, searchedBooksUnauth } = useSelector((state) => state.books);

  const [slicedTrendingBooks, setSlicedTrendingBooks] = useState([]);
  const [slicedTrendingBooksTopRated, setSlicedTrendingBooksTopRated] = useState([]);
  const [slicedTrendingBooksAfricanBooks, setSlicedTrendingBooksAfricanBooks] = useState([]);

  useEffect(() => {
    dispatch(fetchAllTrendingBooksUnauth());
  }, [dispatch]);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  function getMultipleRandomTopRated(arr, num) {
    const shuffled = [...arr].sort(() => 0.8 - Math.random());

    return shuffled.slice(0, num);
  }

  function getMultipleRandomAfricanBooks(arr, num) {
    const shuffled = [...arr].sort(() => 0.3 - Math.random());

    return shuffled.slice(0, num);
  }

  useEffect(() => {
    if (trendingBooksUnauth.length !== 0) {
      const slicedTrending = getMultipleRandom(trendingBooksUnauth, 5);
      setSlicedTrendingBooks(slicedTrending);
      const slicedTrendingTopRated = getMultipleRandomTopRated(trendingBooksUnauth, 5);
      setSlicedTrendingBooksTopRated(slicedTrendingTopRated);
      const slicedTrendingAfricanBooks = getMultipleRandomAfricanBooks(trendingBooksUnauth, 5);
      setSlicedTrendingBooksAfricanBooks(slicedTrendingAfricanBooks);
    }
  }, [trendingBooksUnauth]);

  useEffect(() => {
    if (Object.keys(searchedBooksUnauth).length !== 0) {
      const slicedTrending = getMultipleRandom(searchedBooksUnauth.books, 5);
      setSlicedTrendingBooks(slicedTrending);
    }
  }, [searchedBooksUnauth]);

  return (
    <div className="lib-explore">
      <div className="lib-explore-wrapper">
        <div className="lib-explore-top-items">
          <h1>Get access to Africa’s Largest Libri</h1>
          <p>
            Discover the best of African writing on Nigeria's largest reading platform, designed for
            book lovers like you! Our digital library is the biggest in Africa, offering an
            unparalleled collection of African ebooks, novels and stories.
          </p>
        </div>

        <SingleBook
          searchBar={true}
          datas={slicedTrendingBooks}
          title="Read Trending African Books"
          subtext="Explore our vast collection of ebooks from renowned African Authors"
        />
        <SingleBook
          datas={slicedTrendingBooksTopRated}
          title="Top Rated Books"
          subtext="Discover new authors, genres, and themes to enrich your reading journey"
        />
        <SingleBook
          datas={slicedTrendingBooksAfricanBooks}
          title="African Ebooks Made Accessible"
          subtext="Enjoy seamless access to Nigeria's novel app, featuring the best of African literature"
        />
      </div>
    </div>
  );
};

export default Explore;
