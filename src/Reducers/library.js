import {
  FETCH_MY_BOOKS_SUCCESS,
  ADD_GOALS_SUCCESS,
  RESTORE_ADD_GOALS_INITIAL,
  FETCH_ALL_GOALS_SUCCESS,
  DELETE_GOAL_SUCCESS,
  RESTORE_DELETE_GOAL_INITIAL,
  SEND_WISHLIST_SUCCESS,
  RESTORE_SEND_WISHLIST_INITIAL,
  FETCH_MY_FAVORITES_SUCCESS,
  ADD_REVIEW_SUCCESS,
  RESTORE_ADD_REVIEW_INITIAL,
  READ_BOOK_SUCCESS,
} from "../ActionTypes";

const INIT_STATE = {
  myBooks: [],
  addGoalsSuccess: false,
  addGoalsFailure: false,
  allGoals: [],

  deleteGoalsSuccess: false,
  deleteGoalsFailure: false,

  sendWishlistSuccess: false,
  sendWishlistFailure: false,

  addReviewSuccess: false,
  addReviewFailure: false,

  myFavorites: [],
  readBookSuccess: false,
};

const libraryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_MY_BOOKS_SUCCESS: {
      return {
        ...state,
        myBooks: action.payload,
      };
    }

    case FETCH_MY_FAVORITES_SUCCESS: {
      return {
        ...state,
        myFavorites: action.payload,
      };
    }

    case FETCH_ALL_GOALS_SUCCESS: {
      return {
        ...state,
        allGoals: action.payload,
      };
    }

    case ADD_GOALS_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          addGoalsSuccess: true,
          addGoalsFailure: false,
        };
      } else {
        return {
          ...state,
          addGoalsSuccess: false,
          addGoalsFailure: true,
        };
      }
    }

    case RESTORE_ADD_GOALS_INITIAL: {
      return {
        ...state,
        addGoalsFailure: false,
        addGoalsSuccess: false,
      };
    }

    case DELETE_GOAL_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          deleteGoalsSuccess: true,
          deleteGoalsFailure: false,
        };
      } else {
        return {
          ...state,
          deleteGoalsSuccess: false,
          deleteGoalsFailure: true,
        };
      }
    }

    case RESTORE_DELETE_GOAL_INITIAL: {
      return {
        ...state,
        deleteGoalsFailure: false,
        deleteGoalsSuccess: false,
      };
    }

    case SEND_WISHLIST_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          sendWishlistSuccess: true,
          sendWishlistFailure: false,
        };
      } else {
        return {
          ...state,
          sendWishlistSuccess: false,
          sendWishlistFailure: true,
        };
      }
    }

    case RESTORE_SEND_WISHLIST_INITIAL: {
      return {
        ...state,
        sendWishlistFailure: false,
        sendWishlistSuccess: false,
      };
    }

    case ADD_REVIEW_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          addReviewSuccess: true,
          addReviewFailure: false,
        };
      } else {
        return {
          ...state,
          addReviewSuccess: false,
          addReviewFailure: true,
        };
      }
    }

    case RESTORE_ADD_REVIEW_INITIAL: {
      return {
        ...state,
        addReviewSuccess: false,
        addReviewFailure: false,
      };
    }

    case READ_BOOK_SUCCESS: {
      return {
        ...state,
        readBookSuccess: action.payload,
      };
    }

    default:
      return state;
  }
};

export default libraryReducer;
