import { 
    
   FETCH_ALL_TRENDING_BOOKS,
   FETCH_ALL_TRENDING_BOOKS_SUCCESS,

   FETCH_ALL_TRENDING_BOOKS_UNAUTH,
   FETCH_ALL_TRENDING_BOOKS_UNAUTH_SUCCESS,

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