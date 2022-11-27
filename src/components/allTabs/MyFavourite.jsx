import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyFavorites } from "../../Actions";
import SingleBook from "../singleBook/SingleBook";

const MyFavourite = () => {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state.library);

  useEffect(() => {
    dispatch(fetchMyFavorites());
  }, [dispatch]);

  return <SingleBook datas={myFavorites} searchBar="" title="" />;
};

export default MyFavourite;
