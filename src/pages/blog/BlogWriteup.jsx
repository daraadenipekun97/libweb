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
      <Footer />
    </>
  );
};

export default BlogWriteup;
