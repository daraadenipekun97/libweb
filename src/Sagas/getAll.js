import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import { FETCH_ALL_COUNTRIES, FETCH_SONGS } from "../ActionTypes";

import { getCountries, getSongs } from "../Api";

import { fetchAllCountriesSuccess, fetchSongsSuccess } from "../Actions";

export const fetchCountryRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllCountriesSuccess, getCountries, payload);
};

export const fetchCountryy = function* () {
  yield takeEvery(FETCH_ALL_COUNTRIES, fetchCountryRequest);
};


export const fetchSongRequest = function* ({ payload }) {
  yield call(requestFunction, fetchSongsSuccess, getSongs, payload);
};

export const fetchAllSongss = function* () {
  yield takeEvery(FETCH_SONGS, fetchSongRequest);
};


export default function* rootSaga() {
  yield all([fork(fetchCountryy), fork(fetchAllSongss)]);
}
