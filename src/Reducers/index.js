import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import authReducer from './auth';
import getAllReducer from './getAll';
import booksReducer from './books';





const reducer = () => combineReducers({
  auth: authReducer,
  getAll:getAllReducer,
  books: booksReducer,



  toastr: toastrReducer,

});

export default reducer;