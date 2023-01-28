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
  FETCH_ALL_BOOK_NAMES,
  FETCH_BOOKS_BY_AUTHOR,
  FETCH_ALL_AUTHORS,
  FETCH_BOOKS_DETAILS,
  ADD_BOOK_TO_FAVOURITE,
  REMOVE_BOOK_FROM_FAVOURITE,
  FETCH_AUTHORS_BY_ID,
  SEARCH_BOOK,
  SEARCH_BOOK_UNAUTH,
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
  getAllBookNames,
  getBooksByAuthor,
  getAllAuthors,
  getBookDetails,
  addFav,
  removeFav,
  getAuthorById,
  searchAllBooks,
  searchAllBooksUnauth,
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
  fetchAllBookNamesSuccess,
  fetchBookByAuthorSuccess,
  fetchAllAuthorsSuccess,
  fetchBookDetailsSuccess,
  fetchAuthorsByIdSuccess,
  addBookToFavSuccess,
  removeBookFromFavSuccess,
  searchBookSuccess,
  searchBooksUnauthSuccess,
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

export const fetchAllBooksNamesRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllBookNamesSuccess, getAllBookNames, payload);
};

export const fetchAllBookNamess = function* () {
  yield takeEvery(FETCH_ALL_BOOK_NAMES, fetchAllBooksNamesRequest);
};

export const fetchBooksByAuthorRequest = function* ({ payload }) {
  yield call(requestFunction, fetchBookByAuthorSuccess, getBooksByAuthor, payload);
};

export const fetchBooksByAuthorr = function* () {
  yield takeEvery(FETCH_BOOKS_BY_AUTHOR, fetchBooksByAuthorRequest);
};

export const fetchAllAuthorsRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllAuthorsSuccess, getAllAuthors, payload);
};

export const fetchAllAuthorss = function* () {
  yield takeEvery(FETCH_ALL_AUTHORS, fetchAllAuthorsRequest);
};

export const fetchBookDetailRequest = function* ({ payload }) {
  yield call(requestFunction, fetchBookDetailsSuccess, getBookDetails, payload);
};

export const fetchBookDetailss = function* () {
  yield takeEvery(FETCH_BOOKS_DETAILS, fetchBookDetailRequest);
};

export const addBookToFavouriteRequest = function* ({ payload }) {
  yield call(requestFunction, addBookToFavSuccess, addFav, payload);
};

export const addBookToFavss = function* () {
  yield takeEvery(ADD_BOOK_TO_FAVOURITE, addBookToFavouriteRequest);
};

export const removeBookFromFavRequest = function* ({ payload }) {
  yield call(requestFunction, removeBookFromFavSuccess, removeFav, payload);
};

export const removeBookFromFavss = function* () {
  yield takeEvery(REMOVE_BOOK_FROM_FAVOURITE, removeBookFromFavRequest);
};

export const fetchAuthorByIdRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAuthorsByIdSuccess, getAuthorById, payload);
};

export const fetchAuthorrById = function* () {
  yield takeEvery(FETCH_AUTHORS_BY_ID, fetchAuthorByIdRequest);
};

export const searchBookRequest = function* ({ payload }) {
  yield call(requestFunction, searchBookSuccess, searchAllBooks, payload);
};

export const searchBookss = function* () {
  yield takeEvery(SEARCH_BOOK, searchBookRequest);
};

export const searchBookUnauthRequest = function* ({ payload }) {
  yield call(requestFunction, searchBooksUnauthSuccess, searchAllBooksUnauth, payload);
};

export const searchBookssUnauth = function* () {
  yield takeEvery(SEARCH_BOOK_UNAUTH, searchBookUnauthRequest);
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
    fork(fetchAllBookNamess),
    fork(fetchBooksByAuthorr),
    fork(fetchAllAuthorss),
    fork(fetchBookDetailss),
    fork(addBookToFavss),
    fork(removeBookFromFavss),
    fork(fetchAuthorrById),
    fork(searchBookss),
    fork(searchBookssUnauth),
  ]);
}
