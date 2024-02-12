import React from "react";
import "./blogwriteup.css";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer, Navbar } from "../../containers";
import SingleBlog from "../../components/singleBlog/SingleBlog";

const BlogWriteup = ({ user }) => {
  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}
        <div className="writeup-container">
        <SingleBlog />
        </div>
        {/* <h3 className='blog-writeup-text'>Blog</h3>
           <hr /> */}
        {/* <a href="/blog" class="blog-writeup-container-back-button">
          Back
        </a> */}
       

      <Footer />
    </>
  );
};

export default BlogWriteup;
