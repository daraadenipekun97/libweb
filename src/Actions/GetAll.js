import { FETCH_ALL_COUNTRIES, FETCH_ALL_COUNTRIES_SUCCESS } from "../ActionTypes";

export const fetchAllCountries = () => ({
  type: FETCH_ALL_COUNTRIES,
});

export const fetchAllCountriesSuccess = (payload) => ({
  type: FETCH_ALL_COUNTRIES_SUCCESS,
  payload,
});
