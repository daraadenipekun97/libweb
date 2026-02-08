import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import {
  FETCH_ALL_COUNTRIES,
  FETCH_SONGS,
  HIDE_FACEBOOK_ICON,
  FETCH_ALL_BANNERS,
} from "../ActionTypes";

import { getCountries, getSongs, facebookHide, getBanners } from "../Api";

import {
  fetchAllCountriesSuccess,
  fetchSongsSuccess,
  hideFacebookIconSuccess,
  fetchAllBannersSuccess,
} from "../Actions";

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

export const HideIconRequest = function* ({ payload }) {
  yield call(requestFunction, hideFacebookIconSuccess, facebookHide, payload);
};

export const hideFaceIcon = function* () {
  yield takeEvery(HIDE_FACEBOOK_ICON, HideIconRequest);
};

export const fetchBannersRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllBannersSuccess, getBanners, payload);
};

export const fetchAllBan = function* () {
  yield takeEvery(FETCH_ALL_BANNERS, fetchBannersRequest);
};

export default function* rootSaga() {
  yield all([fork(fetchCountryy), fork(fetchAllSongss), fork(hideFaceIcon), fork(fetchAllBan)]);
}
