import React from "react";
import moment from "moment";
import "./singleblogcard.css";
import Placeholder from "../../assets/images/placeholder.png";

const SingleBlogCard = ({data}) => {
  return (
    <div className="single-blog-card">
      <div className="single-blog-card-image-wrapper">
        <img src={data.image ? data?.image : Placeholder } alt="Adebayo Jacobs-Amoo" />
      </div>
      <div className="single-blog-card-text">
        <span>{moment(data?.updated_at).format("MMM Do YYYY")}</span>
        <p className="single-blog-card-text-title">
          {data?.title}
        </p>
        <p>
          {data?.content}
        </p>
        <a href={`/blog/${data?.id}`}>Read More</a>
      </div>
    </div>
  );
};

export default SingleBlogCard;
