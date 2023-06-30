import { FETCH_ALL_COUNTRIES_SUCCESS, FETCH_SONGS_SUCCESS, HIDE_FACEBOOK_ICON_SUCCESS, RESTORE_HIDE_FACEBOOK_ICON_INITIAL } from "../ActionTypes";

const INIT_STATE = {
  countries: [],
  allSongs:[],
  facebookIconHidden:false
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

    case HIDE_FACEBOOK_ICON_SUCCESS: {
      return {
        ...state,
        facebookIconHidden: true,
      };
    }

    case RESTORE_HIDE_FACEBOOK_ICON_INITIAL: {
      return {
        ...state,
        facebookIconHidden: false,
      };
    }

    default:
      return state;
  }
};

export default getAllReducer;
