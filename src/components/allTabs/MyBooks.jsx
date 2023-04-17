import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyBooks, restoreFavouriteInitial, restoreUnfavouriteInitial, restoreRemoveFromLibraryInitial } from "../../Actions";
import SingleBook from "../singleBook/SingleBook";

const MyBooks = () => {
  const dispatch = useDispatch();
  const { myBooks, removeFromLibSuccess, removeFromLibFailure  } = useSelector((state) => state.library);

  const {
    addBookToFavouriteSuccess,
    addBookToFavouriteFailure,
    removeBookFromFavouriteSuccess,
    removeBookFromFavouriteFailure,
  } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchMyBooks());
  }, [dispatch]);


  useEffect(() => {
    if (addBookToFavouriteSuccess || addBookToFavouriteFailure ) {
      dispatch(fetchMyBooks());
    }

    return () => {
      dispatch(restoreFavouriteInitial());
    };
  }, [addBookToFavouriteSuccess, addBookToFavouriteFailure]);


  useEffect(() => {
    if (removeBookFromFavouriteSuccess || removeBookFromFavouriteFailure) {
      dispatch(fetchMyBooks());
    }

    return () => {
      dispatch(restoreUnfavouriteInitial());
    };
  }, [removeBookFromFavouriteSuccess, removeBookFromFavouriteFailure]);


  useEffect(() => {
    if (removeFromLibSuccess || removeFromLibFailure ) {
      dispatch(fetchMyBooks());
    }

    return () => {
      dispatch(restoreRemoveFromLibraryInitial());
    };
  }, [removeFromLibSuccess, removeFromLibFailure]);


  return <SingleBook datas={myBooks} searchBar="" title="" icon={true} />
  ;
};

export default MyBooks;
