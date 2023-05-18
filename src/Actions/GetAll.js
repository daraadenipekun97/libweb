import { FETCH_ALL_COUNTRIES, FETCH_ALL_COUNTRIES_SUCCESS, FETCH_SONGS, FETCH_SONGS_SUCCESS  } from "../ActionTypes";

export const fetchAllCountries = () => ({
  type: FETCH_ALL_COUNTRIES,
});

export const fetchAllCountriesSuccess = (payload) => ({
  type: FETCH_ALL_COUNTRIES_SUCCESS,
  payload,
});


export const fetchSongs = () => ({
  type: FETCH_SONGS,
});

export const fetchSongsSuccess = (payload) => ({
  type: FETCH_SONGS_SUCCESS,
  payload,
});