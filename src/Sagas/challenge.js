import { all, call, takeEvery, fork } from "redux-saga/effects";
import requestFunction from "../Utils/sagasGenericFunction";

import {
  FETCH_ARTICLE_TOPICS,
  FETCH_ALL_ARTICLE,
  FETCH_ARTICLE_BY_TOPIC,
  CREATE_ARTICLE,
  EDIT_ARTICLE,
  FETCH_ARTICLE_BY_ID,
  VOTE_ARTICLE,
  FETCH_ARTICLE_BY_USER,
  SEND_ARTICLE_LINK
} from "../ActionTypes";

import {
  getArticleTopics,
  getAllArticles,
  getArticleByTpic,
  createArrticle,
  updateArrticle,
  voteForArticle,
  getArticleById,
  getArticleByUser,
  addArticleLink
} from "../Api";

import {
  fetchAllArticleTopicsSuccess,
  fetchAllArticleSuccess,
  fetchArticleByTopicSuccess,
  createArticleSuccess,
  editArticleSuccess,
  voteArticleSuccess,
  fetchArticleByIdSuccess,
  fetchArticleByUserSuccess,
  sendArticleLinkSuccess
} from "../Actions";

export const fetchAllArticleTopicsRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllArticleTopicsSuccess, getArticleTopics, payload);
};

export const fetchAllArtc = function* () {
  yield takeEvery(FETCH_ARTICLE_TOPICS, fetchAllArticleTopicsRequest);
};

export const fetchAllArticleRequest = function* ({ payload }) {
  yield call(requestFunction, fetchAllArticleSuccess, getAllArticles, payload);
};

export const fetchArtc = function* () {
  yield takeEvery(FETCH_ALL_ARTICLE, fetchAllArticleRequest);
};

export const fetchArticleByTopicRequest = function* ({ payload }) {
  yield call(requestFunction, fetchArticleByTopicSuccess, getArticleByTpic, payload);
};

export const fetchArtcByTpc = function* () {
  yield takeEvery(FETCH_ARTICLE_BY_TOPIC, fetchArticleByTopicRequest);
};

export const fetchArticleByIdRequest = function* ({ payload }) {
  yield call(requestFunction, fetchArticleByIdSuccess, getArticleById, payload);
};

export const fetchArtcById = function* () {
  yield takeEvery(FETCH_ARTICLE_BY_ID, fetchArticleByIdRequest);
};

export const fetchArticleByUserRequest = function* ({ payload }) {
  yield call(requestFunction, fetchArticleByUserSuccess, getArticleByUser, payload);
};

export const fetchArticleByUsr = function* () {
  yield takeEvery(FETCH_ARTICLE_BY_USER, fetchArticleByUserRequest);
};

export const createArticleSuccessRequest = function* ({ payload }) {
  yield call(requestFunction, createArticleSuccess, createArrticle, payload);
};

export const createArtcl = function* () {
  yield takeEvery(CREATE_ARTICLE, createArticleSuccessRequest);
};

export const editArticleSuccessRequest = function* ({ payload }) {
  yield call(requestFunction, editArticleSuccess, updateArrticle, payload);
};

export const editArtc = function* () {
  yield takeEvery(EDIT_ARTICLE, editArticleSuccessRequest);
};

export const voteArticleRequest = function* ({ payload }) {
  yield call(requestFunction, voteArticleSuccess, voteForArticle, payload);
};

export const voteArtc = function* () {
  yield takeEvery(VOTE_ARTICLE, voteArticleRequest);
};


export const sendArticleLinkRequest = function* ({ payload }) {
  yield call(requestFunction, sendArticleLinkSuccess, addArticleLink, payload);
};

export const sendArtLink = function* () {
  yield takeEvery(SEND_ARTICLE_LINK, sendArticleLinkRequest);
};

export default function* rootSaga() {
  yield all([
    fork(fetchAllArtc),
    fork(fetchArtc),
    fork(fetchArtcByTpc),
    fork(createArtcl),
    fork(editArtc),
    fork(voteArtc),
    fork(fetchArtcById),
    fork(fetchArticleByUsr),
    fork(sendArtLink)
  ]);
}
