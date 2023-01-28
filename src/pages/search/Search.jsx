import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBooks } from "../../Actions";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./search.css";
import { useParams } from "react-router-dom";
import SingleBook from "../../components/singleBook/SingleBook";
import Preloader from "../../components/preloader/Preloader";
import GenreTab from "../../components/allTabs/GenreTab";
import PageHeaderText from "../../components/pageHeaderText/PageHeaderText";
import SingleAuthor from "../../components/singleAuthor/SingleAuthor";

const Search = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { searchedBooks } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(
      searchBooks({
        search: params.id,
      })
    );
  }, [dispatch, params.id]);

  if (Object.keys(searchedBooks).length === 0) {
    return <Preloader />;
  }

  return (
    <>
      <UserNavbar />
      <div className="search-container">
        {searchedBooks.books.length !== 0 ? (
          <SingleBook
            datas={searchedBooks.books}
            searchBar=""
            title={`Books result for ${params.id}`}
          />
        ) : (
          <></>
        )}
        {searchedBooks.genres.length !== 0 ? (
          <>
            <PageHeaderText text={`Genre result for ${params.id}`} />
            <GenreTab allGenre={searchedBooks.genres} />
            <br />
            <br />
          </>
        ) : (
          <></>
        )}

        {searchedBooks.authors.length !== 0 ? (
          <SingleAuthor
            datas={searchedBooks.authors}
            title={`Author result for ${params.id}`}
            seeAllText={false}
          />
        ) : (
          <></>
        )}

        {searchedBooks.books.length === 0 &&
        searchedBooks.genres.length === 0 &&
        searchedBooks.authors.length === 0 ? (
          <PageHeaderText text={`No search result for ${params.id}`} />
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Search;
