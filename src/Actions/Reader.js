import {
  UPDATE_CURRENT_PAGE,
  CLEAR_BOOK,
  CLEAR_TOC,
  UPDATE_READERS_BOOK,
  UPDATE_TOC,
} from "../ActionTypes";

export const updateCurrentPage = (payload) => ({
  type: UPDATE_CURRENT_PAGE,
  payload,
});

export const clearBook = () => ({
  type: CLEAR_BOOK,
});

export const clearToc = () => ({
  type: CLEAR_TOC,
});

export const updateReadersBook = (payload) => ({
  type: UPDATE_READERS_BOOK,
  payload,
});

export const updateToc = (payload) => ({
  type: UPDATE_TOC,
  payload,
});
