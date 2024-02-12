import React, { useState, useEffect } from "react";
import "./blog.css";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer, Navbar } from "../../containers";
import SingleBlogCard from "../../components/singleBlogCard/SingleBlogCard";
import {
 fetchAllBlogs
} from "../../Actions";

const Blog = ({ user }) => {

  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);


  useEffect(() => {
    dispatch(fetchAllBlogs());
  }, [dispatch]);



  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}
      <div className="blog-container">
        <div className="blog-heading">
          <span>Recent Posts </span>
          <h3>Blog</h3>
        </div>
        <div className="blog-card-container">
          {
            blogs.map((item) => (
              <SingleBlogCard data = {item}/>
            )) 
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
