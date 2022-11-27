import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import { FETCH_ALL_COUNTRIES } from "../ActionTypes";

import { getCountries } from "../Api";

import { fetchAllCountriesSuccess } from "../Actions";

export const fetchCountryRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllCountriesSuccess, getCountries, payload);
};

export const fetchCountryy = function* () {
  yield takeEvery(FETCH_ALL_COUNTRIES, fetchCountryRequest);
};

export default function* rootSaga() {
  yield all([fork(fetchCountryy)]);
}
