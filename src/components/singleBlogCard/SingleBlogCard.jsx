import React from "react";
import moment from "moment";
import "./singleblogcard.css";
import Placeholder from "../../assets/images/placeholder.png";

const SingleBlogCard = ({ data }) => {
  return (
    <div className="single-blog-card">
      <div className="single-blog-card-image-wrapper">
        <img src={data.blog_image_data ? data?.blog_image_data : Placeholder} alt="blog_image" />
      </div>
      <div className="single-blog-card-text">
        <span>{moment(data?.updated_at).format("MMM Do YYYY")}</span>
        <p className="single-blog-card-text-title">{data?.title}</p>
        <p>{data?.content}</p>
        <a href={`/blog/${data?.title ? data.title.replace(/\s+/g, "-") : ""}`}>Read More</a>
      </div>
    </div>
  );
};

export default SingleBlogCard;
