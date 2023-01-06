import React, {useState, useEffect} from "react";
import "./css/genre.css";
import Spinner from "../spinner/Spinner";

const GenreTab = ({allGenre}) => {

  const [spinnerHide, setSpinnerHide] = useState(false)


  useEffect(() => {
    
    setTimeout(() => {
      setSpinnerHide(true)
    }, 3000)

    return () => {
      setSpinnerHide(false)
    }

  }, [])
 
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
                  <hr className="genre-hr" />
                </>
              );
            })
          ) : (
            <div className="spinner">
                <Spinner spinnerHide = {spinnerHide} />
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default GenreTab;
