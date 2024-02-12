import {
    FETCH_ALL_BLOGS_SUCCESS,
    FETCH_BLOG_BY_ID_SUCCESS
  } from "../ActionTypes";
  
  const INIT_STATE = {
    blogs: [],
    blogById: {},
  };
  
  const blogReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_ALL_BLOGS_SUCCESS: {
        return {
          ...state,
          blogs: action.payload,
        };
      }
      case FETCH_BLOG_BY_ID_SUCCESS: {
        return {
          ...state,
          blogById: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
  export default blogReducer;
  