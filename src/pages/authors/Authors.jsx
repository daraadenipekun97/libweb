import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import "./authors.css";
import bookImg from "../../assets/images/wolesoyinka.jpg"
import { Footer } from "../../containers";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchBookByAuthor } from "../../Actions";
import { useParams } from "react-router-dom";


const Authors = () => {

  const params = useParams();

  const dispatch = useDispatch();

  const { booksByAuthor } = useSelector((state) => state.books);


  useEffect(() => {
    dispatch(fetchBookByAuthor(params.id));
  }, [dispatch]);

  return (
    <>

    <UserNavbar/>

      <div className="author-container">

          <div className="author-wrapper">
              <div className="img-wrapper">
                 <img src={bookImg} alt="" />
              </div>
              <div className="author-desc">
                  <h1>George Howell</h1>
                  <p>About the author</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit voluptate vel libero voluptas consequatur quos vero est harum tempore quo.</p>
              </div>
          </div>
          <SingleBook datas={booksByAuthor} searchBar="" title="Authors Book" />
      </div>

      <Footer/>
    
    </>
  );
};

export default Authors;
