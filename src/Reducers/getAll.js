import { FETCH_ALL_COUNTRIES_SUCCESS } from "../ActionTypes";

const INIT_STATE = {
  countries: [],
};

const getAllReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_COUNTRIES_SUCCESS: {
      return {
        ...state,
        countries: action.payload,
      };
    }
    default:
      return state;
  }
};

export default getAllReducer;
