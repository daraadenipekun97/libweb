import React from 'react';
import { useSelector } from "react-redux";
import Spinner from '../spinner/Spinner';


import "./starRating.css";

const StarRating = () => {

    const { bookDetails  } = useSelector((state) => state.books);


    if (Object.keys(bookDetails).length === 0) {
        return (
    
            <Spinner/>
    
        )
      }

  return (
    <>
          <div className="rating">

            {
                bookDetails.rating >= 1 && bookDetails.rating < 2 ? (
                    <>
                        <i class="fa fa-star rate" aria-hidden="true"></i>
                        <i class="fa fa-star unrate" aria-hidden="true"></i>
                        <i class="fa fa-star unrate" aria-hidden="true"></i>
                        <i class="fa fa-star unrate" aria-hidden="true"></i>
                        <i class="fa fa-star unrate" aria-hidden="true"></i>
                    </>
                ):   bookDetails.rating >= 2 && bookDetails.rating < 3  ? (

                    <>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star unrate" aria-hidden="true"></i>
                    <i class="fa fa-star unrate" aria-hidden="true"></i>
                    <i class="fa fa-star unrate" aria-hidden="true"></i>
                </>
                ): bookDetails.rating >= 3 && bookDetails.rating < 4 ? (

                    <>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star unrate" aria-hidden="true"></i>
                    <i class="fa fa-star unrate" aria-hidden="true"></i>
                </>

                ): bookDetails.rating >= 4 && bookDetails.rating < 5 ? (

                    <>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star unrate" aria-hidden="true"></i>
                </>

                ): bookDetails.rating >= 5 ? (

                    <>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                    <i class="fa fa-star rate" aria-hidden="true"></i>
                </>

                ):""
            }
             




              <p className="average-rating">{bookDetails.rating !== null ? `(${bookDetails.rating}.0 Average Rating)`: "No Average Rating"}</p>


          </div>
    </>
  )
}

export default StarRating