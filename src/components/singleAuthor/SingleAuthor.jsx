import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./singleAuthor.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PageHeaderText from "../pageHeaderText/PageHeaderText";
import Spinner from "../spinner/Spinner";

const SingleAuthor = ({ datas, title, seeAllText }) => {
  const dispatch = useDispatch();

  const [spinnerHide, setSpinnerHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSpinnerHide(true);
    }, 3000);

    return () => {
      setSpinnerHide(false);
    };
  }, [dispatch]);

  return (
    <div className="author-gallery">
      <div className="author-gallery-text">
        <PageHeaderText text={title} />

        {seeAllText === true ? (
          <a href="/home/authors" className="see-all-text">
            See All Author
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="author-gallery-wrapper">
        <div className="author-gallery-inner-wrapper">
          {datas.length !== 0 ? (
            datas.map((data) => {
              return (
                <a href={`/home/authors/${data.id}`} key={data.id}>
                  <div className="author-gallery-box">
                    <LazyLoadImage effect="blur" src={data.image_data} alt={data.name} />
                    <p className="author-name">{data.name}</p>
                  </div>
                </a>
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
