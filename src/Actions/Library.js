import {
  FETCH_MY_BOOKS,
  FETCH_MY_BOOKS_SUCCESS,
  ADD_GOALS,
  ADD_GOALS_SUCCESS,
  RESTORE_ADD_GOALS_INITIAL,
  FETCH_ALL_GOALS,
  FETCH_ALL_GOALS_SUCCESS,
  DELETE_GOAL,
  DELETE_GOAL_SUCCESS,
  RESTORE_DELETE_GOAL_INITIAL,
  SEND_WISHLIST,
  SEND_WISHLIST_SUCCESS,
  RESTORE_SEND_WISHLIST_INITIAL,
  FETCH_MY_FAVORITES,
  FETCH_MY_FAVORITES_SUCCESS,
  ADD_REVIEW,
  ADD_REVIEW_SUCCESS,
  RESTORE_ADD_REVIEW_INITIAL,
  READ_BOOK,
  READ_BOOK_SUCCESS,
  REMOVE_FROM_LIBRARY,
  REMOVE_FROM_LIBRARY_SUCCESS,
  RESTORE_REMOVE_FROM_LIBRARY_INITIAL,
  UPDATE_READING_TIME,
  UPDATE_READING_TIME_SUCCESS,
  RESTORE_UPDATE_READING_TIME_INITIAL,
} from "../ActionTypes";

export const fetchMyBooks = () => ({
  type: FETCH_MY_BOOKS,
});

export const fetchMyBooksSuccess = (payload) => ({
  type: FETCH_MY_BOOKS_SUCCESS,
  payload,
});

export const fetchMyFavorites = () => ({
  type: FETCH_MY_FAVORITES,
});

export const fetchMyFavoritesSuccess = (payload) => ({
  type: FETCH_MY_FAVORITES_SUCCESS,
  payload,
});

export const addGoals = ({ start_date, end_date, book_id, hour, interval }) => ({
  type: ADD_GOALS,
  payload: {
    start_date,
    end_date,
    book_id,
    hour,
    interval,
  },
});

export const addGoalsSuccess = (payload) => ({
  type: ADD_GOALS_SUCCESS,
  payload,
});

export const restoreAddGoalsInitial = () => ({
  type: RESTORE_ADD_GOALS_INITIAL,
});

export const fetchAllGoals = () => ({
  type: FETCH_ALL_GOALS,
});

export const fetchAllGoalsSuccess = (payload) => ({
  type: FETCH_ALL_GOALS_SUCCESS,
  payload,
});

export const deleteGoal = (id) => ({
  type: DELETE_GOAL,
  payload: id,
});

export const deleteGoalSuccess = (payload) => ({
  type: DELETE_GOAL_SUCCESS,
  payload,
});

export const restoreDeleteGoalInitial = () => ({
  type: RESTORE_DELETE_GOAL_INITIAL,
});

export const sendWishlist = ({ book_title, book_author }) => ({
  type: SEND_WISHLIST,
  payload: {
    book_title,
    book_author,
  },
});

export const sendWishlistSuccess = (payload) => ({
  type: SEND_WISHLIST_SUCCESS,
  payload,
});

export const restoreSendWishlistInitial = () => ({
  type: RESTORE_SEND_WISHLIST_INITIAL,
});

export const addReview = ({ review, rating, id }) => ({
  type: ADD_REVIEW,
  payload: {
    rating,
    review,
    id,
  },
});

export const addReviewSuccess = (payload) => ({
  type: ADD_REVIEW_SUCCESS,
  payload,
});

export const restoreAddReviewInitial = () => ({
  type: RESTORE_ADD_REVIEW_INITIAL,
});

export const readBook = (id) => ({
  type: READ_BOOK,
  payload: id,
});

export const readBookSuccess = (payload) => ({
  type: READ_BOOK_SUCCESS,
  payload,
});

export const removeFromLibrary = (id) => ({
  type: REMOVE_FROM_LIBRARY,
  payload: id,
});

export const removeFromLibrarySuccess = (payload) => ({
  type: REMOVE_FROM_LIBRARY_SUCCESS,
  payload,
});

export const restoreRemoveFromLibraryInitial = () => ({
  type: RESTORE_REMOVE_FROM_LIBRARY_INITIAL,
});

export const updateReadingTime = ({ total_seconds, book_id }) => ({
  type: UPDATE_READING_TIME,
  payload: {
    total_seconds,
    book_id,
  },
});

export const updateReadingTimeSuccess = (payload) => ({
  type: UPDATE_READING_TIME_SUCCESS,
  payload,
});

export const restoreUpdateReadingTimeInitial = () => ({
  type: RESTORE_UPDATE_READING_TIME_INITIAL,
});
