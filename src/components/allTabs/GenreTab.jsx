import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./css/genre.css";
import Spinner from "../spinner/Spinner";
import { fetchAllGenre } from "../../Actions";

const GenreTab = () => {
  const dispatch = useDispatch();
  const { allGenre } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchAllGenre());
  }, [dispatch]);

  return (
    <>
      <div className="genre-wrapper">
        <ul>
          {allGenre.length !== 0 ? (
            allGenre.map((data) => {
              return (
                <>
                  <li>
                    <a href={`/home/genre/${data.id}`}>{data.title}</a>
                  </li>
                  <hr />
                </>
              );
            })
          ) : (
            <Spinner />
          )}
        </ul>
      </div>
    </>
  );
};

export default GenreTab;
