import { all } from "redux-saga/effects";

import authSagas from "./auth";
import getAllSagas from "./getAll";
import booksSagas from "./books";

export default function* rootSaga(getState) {
  yield all([
    
    authSagas(),
    getAllSagas(),
    booksSagas(),


]);
}