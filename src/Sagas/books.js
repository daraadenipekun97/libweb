import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import {
  FETCH_ALL_TRENDING_BOOKS,
  FETCH_ALL_TRENDING_BOOKS_UNAUTH,
  FETCH_ALL_BOOKS,
  FETCH_POPULAR_AUTHORS,
  FETCH_NEW_RELEASES,
  FETCH_CLASSIC_BOOKS,
  FETCH_KIDDIES_BOOKS,
  FETCH_ALL_GENRE,
  FETCH_BOOKS_BY_GENRE,
} from "../ActionTypes";

import {
  getTrendingBooks,
  getTrendingBooksUnauth,
  getAllBooks,
  getPopularAuthors,
  getNewReleases,
  getClassicBooks,
  getKiddiesBook,
  getAllGenre,
  getBooksByGenre,
} from "../Api";

import {
  fetchAllTrendingBooksSuccess,
  fetchAllTrendingBooksUnauthSuccess,
  fetchAllBooksSuccess,
  fetchPopularAuthorsSuccess,
  fetchNewReleasesSuccess,
  fetchClassicBooksSuccess,
  fetchKiddiesBooksSuccess,
  fetchAllGenreSuccess,
  fetchBookByGenreSuccess,
} from "../Actions";

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

export const fetchAllBooksRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllBooksSuccess, getAllBooks, payload);
};

export const fetchAllBookss = function* () {
  yield takeEvery(FETCH_ALL_BOOKS, fetchAllBooksRequest);
};

export const fetchPopularAuthorsRequest = function* ({ payload }) {
  yield call(requestFunction, fetchPopularAuthorsSuccess, getPopularAuthors, payload);
};

export const fetchPopAuthors = function* () {
  yield takeEvery(FETCH_POPULAR_AUTHORS, fetchPopularAuthorsRequest);
};

export const fetchNewReleasesRequest = function* ({ payload }) {
  yield call(requestFunction, fetchNewReleasesSuccess, getNewReleases, payload);
};

export const fetchNewReleasee = function* () {
  yield takeEvery(FETCH_NEW_RELEASES, fetchNewReleasesRequest);
};

export const fetchClassicBooksRequest = function* ({ payload }) {
  yield call(requestFunction, fetchClassicBooksSuccess, getClassicBooks, payload);
};

export const fetchClassicBookss = function* () {
  yield takeEvery(FETCH_CLASSIC_BOOKS, fetchClassicBooksRequest);
};

export const fetchKiddiesBooksRequest = function* ({ payload }) {
  yield call(requestFunction, fetchKiddiesBooksSuccess, getKiddiesBook, payload);
};

export const fetchKiddiesBookss = function* () {
  yield takeEvery(FETCH_KIDDIES_BOOKS, fetchKiddiesBooksRequest);
};

export const fetchAllGenreRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllGenreSuccess, getAllGenre, payload);
};

export const fetchGenree = function* () {
  yield takeEvery(FETCH_ALL_GENRE, fetchAllGenreRequest);
};

export const fetchBooksByGenreRequest = function* ({ payload }) {
  yield call(requestFunction, fetchBookByGenreSuccess, getBooksByGenre, payload);
};

export const fetchBooksByGenree = function* () {
  yield takeEvery(FETCH_BOOKS_BY_GENRE, fetchBooksByGenreRequest);
};

export default function* rootSaga() {
  yield all([
    fork(fetchTrending),
    fork(fetchTrendingUnauth),
    fork(fetchAllBookss),
    fork(fetchPopAuthors),
    fork(fetchNewReleasee),
    fork(fetchClassicBookss),
    fork(fetchKiddiesBookss),
    fork(fetchGenree),
    fork(fetchBooksByGenree),
  ]);
}
