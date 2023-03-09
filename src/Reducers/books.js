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
  FETCH_ALL_BOOK_NAMES_SUCCESS,
  FETCH_BOOKS_BY_AUTHOR_SUCCESS,
  FETCH_ALL_AUTHORS_SUCCESS,
  FETCH_BOOKS_DETAILS_SUCCESS,
  ADD_BOOK_TO_FAVOURITE_SUCCESS,
  REMOVE_BOOK_FROM_FAVOURITE_SUCCESS,
  RESTORE_FAVOURITE_INITIAL,
  RESTORE_UNFAVOURITE_INITIAL,
  FETCH_AUTHORS_BY_ID_SUCCESS,
  SEARCH_BOOK_SUCCESS,
  SEARCH_BOOK_UNAUTH_SUCCESS,
  RESTORE_FETCH_BOOKS_DETAILS,
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
  allBookNames: [],
  booksByAuthor: [],
  allAuthors: [],
  bookDetails: {},

  addBookToFavouriteSuccess: false,
  addBookToFavouriteFailure: false,

  removeBookFromFavouriteSuccess: false,
  removeBookFromFavouriteFailure: false,

  authorById: {},
  searchedBooks: [],
  searchedBooksUnauth: {},
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

    case FETCH_ALL_BOOK_NAMES_SUCCESS: {
      return {
        ...state,
        allBookNames: action.payload,
      };
    }

    case FETCH_BOOKS_BY_GENRE_SUCCESS: {
      return {
        ...state,
        booksByGenre: action.payload,
      };
    }

    case FETCH_ALL_AUTHORS_SUCCESS: {
      return {
        ...state,
        allAuthors: action.payload,
      };
    }

    case FETCH_BOOKS_BY_AUTHOR_SUCCESS: {
      return {
        ...state,
        booksByAuthor: action.payload,
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

    case FETCH_BOOKS_DETAILS_SUCCESS: {
      return {
        ...state,
        bookDetails: action.payload,
      };
    }

    case RESTORE_FETCH_BOOKS_DETAILS: {
      return {
        ...state,
        bookDetails: {},
      };
    }

    case ADD_BOOK_TO_FAVOURITE_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          addBookToFavouriteSuccess: true,
          addBookToFavouriteFailure: false,
        };
      } else {
        return {
          ...state,
          addBookToFavouriteSuccess: false,
          addBookToFavouriteFailure: true,
        };
      }
    }

    case RESTORE_FAVOURITE_INITIAL: {
      return {
        ...state,
        addBookToFavouriteSuccess: false,
        addBookToFavouriteFailure: false,
      };
    }

    case REMOVE_BOOK_FROM_FAVOURITE_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          removeBookFromFavouriteSuccess: true,
          removeBookFromFavouriteFailure: false,
        };
      } else {
        return {
          ...state,
          removeBookFromFavouriteSuccess: false,
          removeBookFromFavouriteFailure: true,
        };
      }
    }

    case RESTORE_UNFAVOURITE_INITIAL: {
      return {
        ...state,
        removeBookFromFavouriteSuccess: false,
        removeBookFromFavouriteFailure: false,
      };
    }

    case FETCH_AUTHORS_BY_ID_SUCCESS: {
      return {
        ...state,
        authorById: action.payload,
      };
    }

    case SEARCH_BOOK_SUCCESS: {
      return {
        ...state,
        searchedBooks: action.payload,
      };
    }

    case SEARCH_BOOK_UNAUTH_SUCCESS: {
      return {
        ...state,
        searchedBooksUnauth: action.payload,
      };
    }

    default:
      return state;
  }
};

export default booksReducer;
