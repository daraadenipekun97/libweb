import { FETCH_ALL_COUNTRIES, FETCH_ALL_COUNTRIES_SUCCESS, FETCH_SONGS, FETCH_SONGS_SUCCESS, HIDE_FACEBOOK_ICON, HIDE_FACEBOOK_ICON_SUCCESS, RESTORE_HIDE_FACEBOOK_ICON_INITIAL  } from "../ActionTypes";

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



export const hideFacebookIcon = () => ({
  type: HIDE_FACEBOOK_ICON,
});

export const hideFacebookIconSuccess = (payload) => ({
  type: HIDE_FACEBOOK_ICON_SUCCESS,
  payload,
});


export const restoreHideFacebookIcon = () => ({
  type: RESTORE_HIDE_FACEBOOK_ICON_INITIAL,
});