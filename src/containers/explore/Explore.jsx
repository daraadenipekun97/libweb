import React from "react";
import "./explore.css";
import SingleBook from "../../components/singleBook/SingleBook";

const Explore = () => {
  return (
    <div className="lib-explore">
      <div className="lib-explore-top-items">
        <h1>Get access to Africa’s Largest Libri</h1>
        <p>Explore the books you love, and also discover new and exciting authors</p>
      </div>

      <SingleBook />
    </div>
  );
};

export default Explore;
