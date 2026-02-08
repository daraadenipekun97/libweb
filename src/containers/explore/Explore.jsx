import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./explore.css";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchAllTrendingBooksUnauth } from "../../Actions";
import { ChevronRight } from "lucide-react";


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
    <section id="library" className="books-section">
      <div className="container books-container">
        {/* Section Header */}
        <div className="books-header">
          <div className="books-header-content">
            <p className="books-label">Our Collection</p>
            <h2 className="books-title">Trending African Books</h2>
            <p className="books-description">
              Explore our vast collection of ebooks from renowned African authors that will transport you across the continent.
            </p>
          </div>
          {/* <button className="btn btn--outline books-view-all">
            View More Books
            <ChevronRight />
          </button> */}
        </div>

        {/* Books Grid */}
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
    </section>
  );

};

export default Explore;
