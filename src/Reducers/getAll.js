import { FETCH_ALL_COUNTRIES_SUCCESS, FETCH_SONGS_SUCCESS } from "../ActionTypes";

const INIT_STATE = {
  countries: [],
  allSongs:[],
};

const getAllReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_COUNTRIES_SUCCESS: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    case FETCH_SONGS_SUCCESS: {
      return {
        ...state,
        allSongs: action.payload,
      };
    }

    default:
      return state;
  }
};

export default getAllReducer;
