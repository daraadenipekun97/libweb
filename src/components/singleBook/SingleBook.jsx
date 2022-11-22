import React from "react";
import "./singleBook.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import BookImg from "../../assets/images/wolesoyinka.jpg";
import Spinner from "../spinner/Spinner";

const SingleBook = ({datas, searchBar, title}) => {

  if (datas.length === 0) {

    return <Spinner/>
    
  }

  return (
    <div className="lib-book-gallery">
      <div className="lib-book-gallery-text">
        <h1>{title}</h1>
        {
          searchBar === true ? (
            <div className="growing-search">
            <div className="input">
              <input type="text" name="search" placeholder="search for a book" />
            </div>
            <div className="submit">
              <button type="submit">Search</button>
            </div>
          </div>
          ):
          <a href="#" className="see-all-text">See All</a>
        }
      </div>
      <div className="lib-book-gallery-wrapper">
        <div className="lib-book-gallery-inner-wrapper">
         {
          datas.map((data) => {
            return(
              <div className="lib-gallery-box" key = {data.id}>
                <LazyLoadImage 
                  effect="blur"
                  src={data.image_data} 
                  alt={data.name}
                  placeholder={<Spinner/>}
                  />
                <p className="lib-gallery-box-author">{data.author.name}</p>
                <h1 className="lib-gallery-box-book-name">{data.name}</h1>
              </div>
            )
          })
         }
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
