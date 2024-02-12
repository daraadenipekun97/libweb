import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyFavorites, restoreUnfavouriteInitial } from "../../Actions";
import SingleBook from "../singleBook/SingleBook";

const MyFavourite = () => {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector((state) => state.library);

  const { removeBookFromFavouriteSuccess, removeBookFromFavouriteFailure } = useSelector(
    (state) => state.books
  );

  useEffect(() => {
    dispatch(fetchMyFavorites());
  }, [dispatch]);

  useEffect(() => {
    if (removeBookFromFavouriteSuccess || removeBookFromFavouriteFailure) {
      dispatch(fetchMyFavorites());
    }

    return () => {
      dispatch(restoreUnfavouriteInitial());
    };
  }, [removeBookFromFavouriteSuccess, removeBookFromFavouriteFailure]);

  return <SingleBook datas={myFavorites} searchBar="" title="" favorite={true} />;
};

export default MyFavourite;
