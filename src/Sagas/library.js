import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import {
  FETCH_MY_BOOKS,
  ADD_GOALS,
  FETCH_ALL_GOALS,
  DELETE_GOAL,
  SEND_WISHLIST,
  FETCH_MY_FAVORITES,
} from "../ActionTypes";

import {
  getMyBooks,
  createGoals,
  getAllGoals,
  deleteGoals,
  sendWishlists,
  getMyFavorites,
} from "../Api";

import {
  fetchMyBooksSuccess,
  addGoalsSuccess,
  fetchAllGoalsSuccess,
  deleteGoalSuccess,
  sendWishlistSuccess,
  fetchMyFavoritesSuccess,
} from "../Actions";

export const fetchMyBooksRequest = function* ({ payload }) {
  yield call(requestFunction, fetchMyBooksSuccess, getMyBooks, payload);
};

export const fetchMyBookss = function* () {
  yield takeEvery(FETCH_MY_BOOKS, fetchMyBooksRequest);
};

export const fetchFavRequest = function* ({ payload }) {
  yield call(requestFunction, fetchMyFavoritesSuccess, getMyFavorites, payload);
};

export const fetchMyFavs = function* () {
  yield takeEvery(FETCH_MY_FAVORITES, fetchFavRequest);
};

export const addGoalsRequest = function* ({ payload }) {
  yield call(requestFunction, addGoalsSuccess, createGoals, payload);
};

export const addReadingGoalsss = function* () {
  yield takeEvery(ADD_GOALS, addGoalsRequest);
};

export const fetchGoalsRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllGoalsSuccess, getAllGoals, payload);
};

export const fetchAllGoalss = function* () {
  yield takeEvery(FETCH_ALL_GOALS, fetchGoalsRequest);
};

export const deleteGoalsRequest = function* ({ payload }) {
  yield call(requestFunction, deleteGoalSuccess, deleteGoals, payload);
};

export const deleteReadingGoalsss = function* () {
  yield takeEvery(DELETE_GOAL, deleteGoalsRequest);
};

export const sendWishlistRequest = function* ({ payload }) {
  yield call(requestFunction, sendWishlistSuccess, sendWishlists, payload);
};

export const sendWishlistss = function* () {
  yield takeEvery(SEND_WISHLIST, sendWishlistRequest);
};

export default function* rootSaga() {
  yield all([
    fork(fetchMyBookss),
    fork(addReadingGoalsss),
    fork(fetchAllGoalss),
    fork(deleteReadingGoalsss),
    fork(sendWishlistss),
    fork(fetchMyFavs),
  ]);
}
