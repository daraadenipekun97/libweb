import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import { FETCH_ALL_BLOGS, FETCH_BLOG_BY_ID } from "../ActionTypes";

import { getBlogs, getBlogById } from "../Api";

import { fetchAllBlogsSuccess, fetchBlogByIdSuccess } from "../Actions";

export const fetchBlogRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllBlogsSuccess, getBlogs, payload);
};

export const fetchBlgs = function* () {
  yield takeEvery(FETCH_ALL_BLOGS, fetchBlogRequest);
};

export const fetchBlogByIdRequest = function* ({ payload }) {
  yield call(requestFunction, fetchBlogByIdSuccess, getBlogById, payload);
};

export const fetchBlgById = function* () {
  yield takeEvery(FETCH_BLOG_BY_ID, fetchBlogByIdRequest);
};

export default function* rootSaga() {
  yield all([fork(fetchBlgs), fork(fetchBlgById)]);
}
