import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";
import authReducer from "./auth";
import getAllReducer from "./getAll";
import booksReducer from "./books";
import libraryReducer from "./library";
import profileReducer from "./profile";
import readersReducer from "./readers";
import challengeReducer from "./challenge";
import blogReducer from "./blog";

const reducer = () =>
  combineReducers({
    auth: authReducer,
    getAll: getAllReducer,
    books: booksReducer,
    library: libraryReducer,
    profile: profileReducer,
    reader: readersReducer,
    challenge: challengeReducer,
    blog: blogReducer,
    toastr: toastrReducer,
  });

export default reducer;
