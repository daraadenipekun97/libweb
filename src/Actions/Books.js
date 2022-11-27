import {
  FETCH_ALL_TRENDING_BOOKS,
  FETCH_ALL_TRENDING_BOOKS_SUCCESS,
  FETCH_ALL_TRENDING_BOOKS_UNAUTH,
  FETCH_ALL_TRENDING_BOOKS_UNAUTH_SUCCESS,
  FETCH_ALL_BOOKS,
  FETCH_ALL_BOOKS_SUCCESS,
  FETCH_POPULAR_AUTHORS,
  FETCH_POPULAR_AUTHORS_SUCCESS,
  FETCH_NEW_RELEASES,
  FETCH_NEW_RELEASES_SUCCESS,
  FETCH_CLASSIC_BOOKS,
  FETCH_CLASSIC_BOOKS_SUCCESS,
  FETCH_KIDDIES_BOOKS,
  FETCH_KIDDIES_BOOKS_SUCCESS,
  FETCH_ALL_GENRE,
  FETCH_ALL_GENRE_SUCCESS,
  FETCH_BOOKS_BY_GENRE,
  FETCH_BOOKS_BY_GENRE_SUCCESS,
} from "../ActionTypes";

export const fetchAllTrendingBooks = () => ({
  type: FETCH_ALL_TRENDING_BOOKS,
});

export const fetchAllTrendingBooksSuccess = (payload) => ({
  type: FETCH_ALL_TRENDING_BOOKS_SUCCESS,
  payload,
});

export const fetchAllTrendingBooksUnauth = () => ({
  type: FETCH_ALL_TRENDING_BOOKS_UNAUTH,
});

export const fetchAllTrendingBooksUnauthSuccess = (payload) => ({
  type: FETCH_ALL_TRENDING_BOOKS_UNAUTH_SUCCESS,
  payload,
});

export const fetchAllBooks = () => ({
  type: FETCH_ALL_BOOKS,
});

export const fetchAllBooksSuccess = (payload) => ({
  type: FETCH_ALL_BOOKS_SUCCESS,
  payload,
});

export const fetchPopularAuthors = () => ({
  type: FETCH_POPULAR_AUTHORS,
});

export const fetchPopularAuthorsSuccess = (payload) => ({
  type: FETCH_POPULAR_AUTHORS_SUCCESS,
  payload,
});

export const fetchNewReleases = () => ({
  type: FETCH_NEW_RELEASES,
});

export const fetchNewReleasesSuccess = (payload) => ({
  type: FETCH_NEW_RELEASES_SUCCESS,
  payload,
});

export const fetchClassicBooks = () => ({
  type: FETCH_CLASSIC_BOOKS,
});

export const fetchClassicBooksSuccess = (payload) => ({
  type: FETCH_CLASSIC_BOOKS_SUCCESS,
  payload,
});

export const fetchKiddiesBooks = () => ({
  type: FETCH_KIDDIES_BOOKS,
});

export const fetchKiddiesBooksSuccess = (payload) => ({
  type: FETCH_KIDDIES_BOOKS_SUCCESS,
  payload,
});

export const fetchAllGenre = () => ({
  type: FETCH_ALL_GENRE,
});

export const fetchAllGenreSuccess = (payload) => ({
  type: FETCH_ALL_GENRE_SUCCESS,
  payload,
});

export const fetchBookByGenre = (id) => ({
  type: FETCH_BOOKS_BY_GENRE,
  payload: id,
});

export const fetchBookByGenreSuccess = (payload) => ({
  type: FETCH_BOOKS_BY_GENRE_SUCCESS,
  payload,
});
