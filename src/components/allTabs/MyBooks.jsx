import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyBooks } from "../../Actions";
import SingleBook from "../singleBook/SingleBook";

const MyBooks = () => {
  const dispatch = useDispatch();
  const { myBooks } = useSelector((state) => state.library);

  useEffect(() => {
    dispatch(fetchMyBooks());
  }, [dispatch]);

  return <SingleBook datas={myBooks} searchBar="" title="" />;
};

export default MyBooks;
