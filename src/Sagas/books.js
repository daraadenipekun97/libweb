import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import { FETCH_ALL_TRENDING_BOOKS, FETCH_ALL_TRENDING_BOOKS_UNAUTH } from "../ActionTypes";

import { getTrendingBooks , getTrendingBooksUnauth } from "../Api";

import { fetchAllTrendingBooksSuccess , fetchAllTrendingBooksUnauthSuccess } from "../Actions";

export const fetchTrendingBooksRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllTrendingBooksSuccess, getTrendingBooks, payload);
};

export const fetchTrending = function* () {
  yield takeEvery(FETCH_ALL_TRENDING_BOOKS, fetchTrendingBooksRequest);
};


export const fetchTrendingBooksUnauthRequest = function* ({ payload }) {
    yield call(requestFunction, fetchAllTrendingBooksUnauthSuccess, getTrendingBooksUnauth, payload);
  };
  
  export const fetchTrendingUnauth = function* () {
    yield takeEvery(FETCH_ALL_TRENDING_BOOKS_UNAUTH, fetchTrendingBooksUnauthRequest);
  };

export default function* rootSaga() {
  yield all([
    
    fork(fetchTrending),
    fork(fetchTrendingUnauth),


]);
}