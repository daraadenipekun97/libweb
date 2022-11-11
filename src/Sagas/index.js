import { all } from "redux-saga/effects";

import authSagas from "./auth";
import getAllSagas from "./getAll"

export default function* rootSaga(getState) {
  yield all([
    
    authSagas(),
    getAllSagas(),


]);
}