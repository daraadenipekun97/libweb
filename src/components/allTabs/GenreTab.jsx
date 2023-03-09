import React, { useState, useEffect } from "react";
import "./css/genre.css";
import Spinner from "../spinner/Spinner";
import { useNavigate } from "react-router-dom";

const GenreTab = ({ allGenre }) => {
  const [spinnerHide, setSpinnerHide] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setSpinnerHide(true);
    }, 3000);

    return () => {
      setSpinnerHide(false);
    };
  }, []);

  const handleGenreNavigate = (id) => {
    navigate(`/home/genre/${id}`);
  };

  return (
    <>
      <div className="genre-wrapper">
        <ul>
          {allGenre.length !== 0 ? (
            allGenre.map((data) => {
              return (
                <>
                  <li onClick={() => handleGenreNavigate(data.id)}>{data.title}</li>
                  <hr className="genre-hr" />
                </>
              );
            })
          ) : (
            <div className="spinner">
              <Spinner spinnerHide={spinnerHide} />
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default GenreTab;
