import {
        FETCH_ALL_BLOGS,
        FETCH_ALL_BLOGS_SUCCESS,
        FETCH_BLOG_BY_ID,
        FETCH_BLOG_BY_ID_SUCCESS
  } from "../ActionTypes";
  
  export const fetchAllBlogs = () => ({
    type: FETCH_ALL_BLOGS,
  });
  
  export const fetchAllBlogsSuccess = (payload) => ({
    type: FETCH_ALL_BLOGS_SUCCESS,
    payload,
  });


  export const fetchBlogById = (id) => ({
    type: FETCH_BLOG_BY_ID,
    payload: id,
  });
  
  export const fetchBlogByIdSuccess = (payload) => ({
    type: FETCH_BLOG_BY_ID_SUCCESS,
    payload,
  });