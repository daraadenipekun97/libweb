import { all } from "redux-saga/effects";

import authSagas from "./auth";
import getAllSagas from "./getAll";
import booksSagas from "./books";
import librarySagas from "./library";
import profileSagas from "./profile";
import challengeSagas from "./challenge";
import blogSagas from "./blog";

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    getAllSagas(),
    booksSagas(),
    librarySagas(),
    profileSagas(),
    challengeSagas(),
    blogSagas()
  ]);
}
