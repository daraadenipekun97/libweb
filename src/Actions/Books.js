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
  FETCH_ALL_BOOK_NAMES,
  FETCH_ALL_BOOK_NAMES_SUCCESS,
  FETCH_BOOKS_BY_AUTHOR,
  FETCH_BOOKS_BY_AUTHOR_SUCCESS,
  FETCH_ALL_AUTHORS,
  FETCH_ALL_AUTHORS_SUCCESS,
  FETCH_BOOKS_DETAILS,
  FETCH_BOOKS_DETAILS_SUCCESS,
  RESTORE_FETCH_BOOKS_DETAILS,
  ADD_BOOK_TO_FAVOURITE,
  ADD_BOOK_TO_FAVOURITE_SUCCESS,
  REMOVE_BOOK_FROM_FAVOURITE,
  REMOVE_BOOK_FROM_FAVOURITE_SUCCESS,
  RESTORE_FAVOURITE_INITIAL,
  RESTORE_UNFAVOURITE_INITIAL,
  FETCH_AUTHORS_BY_ID,
  FETCH_AUTHORS_BY_ID_SUCCESS,
  SEARCH_BOOK,
  SEARCH_BOOK_SUCCESS,
  RESTORE_SEARCH_BOOK_INITIAL,
  SEARCH_BOOK_UNAUTH,
  SEARCH_BOOK_UNAUTH_SUCCESS,
  RESTORE_SEARCH_BOOK_UNAUTH_INITIAL,
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

export const fetchAllBookNames = () => ({
  type: FETCH_ALL_BOOK_NAMES,
});

export const fetchAllBookNamesSuccess = (payload) => ({
  type: FETCH_ALL_BOOK_NAMES_SUCCESS,
  payload,
});

export const fetchBookByAuthor = (id) => ({
  type: FETCH_BOOKS_BY_AUTHOR,
  payload: id,
});

export const fetchBookByAuthorSuccess = (payload) => ({
  type: FETCH_BOOKS_BY_AUTHOR_SUCCESS,
  payload,
});

export const fetchAllAuthors = () => ({
  type: FETCH_ALL_AUTHORS,
});

export const fetchAllAuthorsSuccess = (payload) => ({
  type: FETCH_ALL_AUTHORS_SUCCESS,
  payload,
});

export const fetchBookDetails = (id) => ({
  type: FETCH_BOOKS_DETAILS,
  payload: id,
});

export const fetchBookDetailsSuccess = (payload) => ({
  type: FETCH_BOOKS_DETAILS_SUCCESS,
  payload,
});

export const restoreFetchBookDetails = () => ({
  type: RESTORE_FETCH_BOOKS_DETAILS,
});

export const addBookToFav = (id) => ({
  type: ADD_BOOK_TO_FAVOURITE,
  payload: id,
});

export const addBookToFavSuccess = (payload) => ({
  type: ADD_BOOK_TO_FAVOURITE_SUCCESS,
  payload,
});

export const removeBookFromFav = (id) => ({
  type: REMOVE_BOOK_FROM_FAVOURITE,
  payload: id,
});

export const removeBookFromFavSuccess = (payload) => ({
  type: REMOVE_BOOK_FROM_FAVOURITE_SUCCESS,
  payload,
});

export const restoreFavouriteInitial = () => ({
  type: RESTORE_FAVOURITE_INITIAL,
});

export const restoreUnfavouriteInitial = () => ({
  type: RESTORE_UNFAVOURITE_INITIAL,
});

export const fetchAuthorsById = (id) => ({
  type: FETCH_AUTHORS_BY_ID,
  payload: id,
});

export const fetchAuthorsByIdSuccess = (payload) => ({
  type: FETCH_AUTHORS_BY_ID_SUCCESS,
  payload,
});

export const searchBooks = ({ search }) => ({
  type: SEARCH_BOOK,
  payload: {
    search,
  },
});

export const searchBookSuccess = (payload) => ({
  type: SEARCH_BOOK_SUCCESS,
  payload,
});

export const restoreSearchBookInitial = () => ({
  type: RESTORE_SEARCH_BOOK_INITIAL,
});

export const searchBooksUnauth = ({ search }) => ({
  type: SEARCH_BOOK_UNAUTH,
  payload: {
    search,
  },
});

export const searchBooksUnauthSuccess = (payload) => ({
  type: SEARCH_BOOK_UNAUTH_SUCCESS,
  payload,
});

export const restoreSearchBooksUnauthInitial = () => ({
  type: RESTORE_SEARCH_BOOK_UNAUTH_INITIAL,
});
