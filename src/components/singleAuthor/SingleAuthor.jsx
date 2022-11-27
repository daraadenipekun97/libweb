import React, { useEffect, useState } from "react";
import "./singleAuthor.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PageHeaderText from "../pageHeaderText/PageHeaderText";
import Spinner from "../spinner/Spinner";

const SingleAuthor = ({ datas, title }) => {
  return (
    <div className="author-gallery">
      <div className="author-gallery-text">
        <PageHeaderText text={title} />

        <a href="/home/authors" className="see-all-text">
          See All Author
        </a>
      </div>
      <div className="author-gallery-wrapper">
        <div className="author-gallery-inner-wrapper">
          {datas.length !== 0 ? (
            datas.map((data) => {
              return (
                <div className="author-gallery-box" key={data.id}>
                  <LazyLoadImage effect="blur" src={data.image_data} alt={data.name} />
                  <p className="author-name">{data.name}</p>
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleAuthor;
