import { 
    
    
    FETCH_ALL_TRENDING_BOOKS_SUCCESS,
    FETCH_ALL_TRENDING_BOOKS_UNAUTH_SUCCESS




} from "../ActionTypes";

const INIT_STATE = {
    
    trendingBooks:[],
    trendingBooksUnauth:[]

};

const booksReducer =  (state = INIT_STATE, action) => {
    switch (action.type) {
      case FETCH_ALL_TRENDING_BOOKS_SUCCESS: {

              return {
                  ...state,
                  trendingBooks: action.payload,  
              };
          }

          case FETCH_ALL_TRENDING_BOOKS_UNAUTH_SUCCESS: {

            return {
                ...state,
                trendingBooksUnauth: action.payload,  
            };
        }
      default:
        return state;
    }
  };
  
  export default booksReducer