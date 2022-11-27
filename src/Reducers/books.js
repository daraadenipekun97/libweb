import {
  FETCH_ALL_TRENDING_BOOKS_SUCCESS,
  FETCH_ALL_TRENDING_BOOKS_UNAUTH_SUCCESS,
  FETCH_ALL_BOOKS_SUCCESS,
  FETCH_POPULAR_AUTHORS_SUCCESS,
  FETCH_NEW_RELEASES_SUCCESS,
  FETCH_CLASSIC_BOOKS_SUCCESS,
  FETCH_KIDDIES_BOOKS_SUCCESS,
  FETCH_ALL_GENRE_SUCCESS,
  FETCH_BOOKS_BY_GENRE_SUCCESS,
} from "../ActionTypes";

const INIT_STATE = {
  trendingBooks: [],
  trendingBooksUnauth: [],
  allBooks: [],
  popularAuthors: [],
  newReleases: [],
  classicBooks: [],
  kiddiesBooks: [],
  allGenre: [],
  booksByGenre: [],
};

const booksReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_TRENDING_BOOKS_SUCCESS: {
      return {
        ...state,
        trendingBooks: action.payload,
      };
    }

    case FETCH_ALL_BOOKS_SUCCESS: {
      return {
        ...state,
        allBooks: action.payload,
      };
    }

    case FETCH_BOOKS_BY_GENRE_SUCCESS: {
      return {
        ...state,
        booksByGenre: action.payload,
      };
    }

    case FETCH_ALL_TRENDING_BOOKS_UNAUTH_SUCCESS: {
      return {
        ...state,
        trendingBooksUnauth: action.payload,
      };
    }

    case FETCH_POPULAR_AUTHORS_SUCCESS: {
      return {
        ...state,
        popularAuthors: action.payload,
      };
    }

    case FETCH_NEW_RELEASES_SUCCESS: {
      return {
        ...state,
        newReleases: action.payload,
      };
    }

    case FETCH_CLASSIC_BOOKS_SUCCESS: {
      return {
        ...state,
        classicBooks: action.payload,
      };
    }

    case FETCH_KIDDIES_BOOKS_SUCCESS: {
      return {
        ...state,
        kiddiesBooks: action.payload,
      };
    }

    case FETCH_ALL_GENRE_SUCCESS: {
      return {
        ...state,
        allGenre: action.payload,
      };
    }

    default:
      return state;
  }
};

export default booksReducer;
