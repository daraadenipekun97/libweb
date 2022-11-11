import {combineReducers} from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import authReducer from './auth';
import getAllReducer from './getAll';





const reducer = () => combineReducers({
  auth: authReducer,
  getAll:getAllReducer,




  toastr: toastrReducer,

});

export default reducer;