import {
  FETCH_ARTICLE_TOPICS,
  FETCH_ARTICLE_TOPICS_SUCCESS,
  FETCH_ALL_ARTICLE,
  FETCH_ALL_ARTICLE_SUCCESS,
  FETCH_ARTICLE_BY_TOPIC,
  FETCH_ARTICLE_BY_TOPIC_SUCCESS,
  CREATE_ARTICLE,
  CREATE_ARTICLE_SUCCESS,
  RESTORE_CREATE_ARTICLE_INITIAL,
  EDIT_ARTICLE,
  EDIT_ARTICLE_SUCCESS,
  RESTORE_EDIT_ARTICLE_INITIAL,
  FETCH_ARTICLE_BY_ID,
  FETCH_ARTICLE_BY_ID_SUCCESS,
  VOTE_ARTICLE,
  VOTE_ARTICLE_SUCCESS,
  FETCH_ARTICLE_BY_USER,
  FETCH_ARTICLE_BY_USER_SUCCESS,
  RESTORE_FETCH_ARTICLE_BY_TOPIC,
  RESTORE_VOTE_ARTICLE_INITIAL,
  SEND_ARTICLE_LINK,
  SEND_ARTICLE_LINK_SUCCESS,
} from "../ActionTypes";

export const fetchAllArticleTopics = () => ({
  type: FETCH_ARTICLE_TOPICS,
});

export const fetchAllArticleTopicsSuccess = (payload) => ({
  type: FETCH_ARTICLE_TOPICS_SUCCESS,
  payload,
});

export const fetchAllArticle = () => ({
  type: FETCH_ALL_ARTICLE,
});

export const fetchAllArticleSuccess = (payload) => ({
  type: FETCH_ALL_ARTICLE_SUCCESS,
  payload,
});

export const fetchArticleByTopic = (id) => ({
  type: FETCH_ARTICLE_BY_TOPIC,
  payload: id,
});

export const fetchArticleByTopicSuccess = (payload) => ({
  type: FETCH_ARTICLE_BY_TOPIC_SUCCESS,
  payload,
});

export const restorefetchArticleByTopicInitial = () => ({
  type: RESTORE_FETCH_ARTICLE_BY_TOPIC,
});

export const createArticle = ({ article_topic_id, article_body }) => ({
  type: CREATE_ARTICLE,
  payload: { article_topic_id, article_body },
});

export const createArticleSuccess = (payload) => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload,
});

export const restoreCreateArticleInitial = () => ({
  type: RESTORE_CREATE_ARTICLE_INITIAL,
});

export const editArticle = ({ article_topic_id, article_body, article_id }) => ({
  type: EDIT_ARTICLE,
  payload: { article_topic_id, article_body, article_id },
});

export const editArticleSuccess = (payload) => ({
  type: EDIT_ARTICLE_SUCCESS,
  payload,
});

export const restoreEditArticleInitial = () => ({
  type: RESTORE_EDIT_ARTICLE_INITIAL,
});

export const voteArticle = (id) => ({
  type: VOTE_ARTICLE,
  payload: id,
});

export const voteArticleSuccess = (payload) => ({
  type: VOTE_ARTICLE_SUCCESS,
  payload,
});

export const restoreVoteArticleInitial = () => ({
  type: RESTORE_VOTE_ARTICLE_INITIAL,
});

export const fetchArticleById = (id) => ({
  type: FETCH_ARTICLE_BY_ID,
  payload: id,
});

export const fetchArticleByIdSuccess = (payload) => ({
  type: FETCH_ARTICLE_BY_ID_SUCCESS,
  payload,
});

export const fetchArticleByUser = () => ({
  type: FETCH_ARTICLE_BY_USER,
});

export const fetchArticleByUserSuccess = (payload) => ({
  type: FETCH_ARTICLE_BY_USER_SUCCESS,
  payload,
});

export const sendArticleLink = ({ article_id, link }) => ({
  type: SEND_ARTICLE_LINK,
  payload: { article_id, link },
});

export const sendArticleLinkSuccess = (payload) => ({
  type: SEND_ARTICLE_LINK_SUCCESS,
  payload,
});
