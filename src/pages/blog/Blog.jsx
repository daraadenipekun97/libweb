import React from 'react'
import "./blog.css"
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer, Navbar } from "../../containers";
import SingleBlog from '../../components/singleBlog/SingleBlog';



const Blog = ({user}) => {
  return (
    <>
        {user ? <UserNavbar /> : <Navbar />}

        <div className="blog-container">
            <h3 className='blog-text'>Blog</h3>
            <hr />
            <SingleBlog/>
        </div>

        <Footer />
    </>
  )
}

export default Blog