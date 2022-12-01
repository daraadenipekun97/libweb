import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllAuthors } from "../../Actions";
import SingleAuthor from "../../components/singleAuthor/SingleAuthor";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import "./allAuthors.css";


const AllAuthors = () => {

    const dispatch = useDispatch();
    const { allAuthors } = useSelector((state) => state.books);


    useEffect(() => {
        dispatch(fetchAllAuthors());
      }, [dispatch]);

  return (
    <>
        <UserNavbar/>
        <div className="all-authors-container">
            <SingleAuthor datas={allAuthors} title="Favourite Authors" seeAllText = {false}  />
        </div>
    </>
  )
}

export default AllAuthors