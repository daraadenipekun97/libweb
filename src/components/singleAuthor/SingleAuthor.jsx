import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./singleAuthor.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PageHeaderText from "../pageHeaderText/PageHeaderText";
import Spinner from "../spinner/Spinner";
import { useNavigate } from "react-router-dom";

const SingleAuthor = ({ datas, title, seeAllText }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [spinnerHide, setSpinnerHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSpinnerHide(true);
    }, 3000);

    return () => {
      setSpinnerHide(false);
    };
  }, [dispatch]);

  const handleSeeAllAuthors = () => {
    navigate("/home/authors");
  };

  const handleAuthorNavigate = (id) => {
    navigate(`/home/authors/${id}`);
  };

  return (
    <div className="author-gallery">
      <div className="author-gallery-text">
        <PageHeaderText text={title} />

        {seeAllText === true ? (
          <p className="see-all-text" onClick={handleSeeAllAuthors}>
            See All Author
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="author-gallery-wrapper">
        <div className="author-gallery-inner-wrapper">
          {datas.length !== 0 ? (
            datas.map((data) => {
              return (
                <div
                  className="author-gallery-box"
                  key={data.id}
                  onClick={() => handleAuthorNavigate(data.id)}
                >
                  <LazyLoadImage effect="blur" src={data.image_data} alt={data.name} />
                  <p className="author-name">{data.name}</p>
                </div>
              );
            })
          ) : (
            <Spinner spinnerHide={spinnerHide} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleAuthor;
