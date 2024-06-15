import {
  FETCH_ARTICLE_TOPICS_SUCCESS,
  FETCH_ALL_ARTICLE_SUCCESS,
  FETCH_ARTICLE_BY_TOPIC_SUCCESS,
  RESTORE_FETCH_ARTICLE_BY_TOPIC,
  CREATE_ARTICLE_SUCCESS,
  RESTORE_CREATE_ARTICLE_INITIAL,
  EDIT_ARTICLE_SUCCESS,
  RESTORE_EDIT_ARTICLE_INITIAL,
  FETCH_ARTICLE_BY_ID_SUCCESS,
  VOTE_ARTICLE_SUCCESS,
  FETCH_ARTICLE_BY_USER_SUCCESS,
  RESTORE_VOTE_ARTICLE_INITIAL,
  SEND_ARTICLE_LINK_SUCCESS,
} from "../ActionTypes";

const INIT_STATE = {
  allTopics: [],
  allArticles: [],
  articlesByTopic: [],

  createArticleSuccess: false,
  createArticleFailure: false,

  editArticleSuccess: false,
  editArticleFailure: false,

  articleById: {},

  voteArticleSuccess: false,
  voteArticleFailure: false,

  articleByUser: {},

  addArticleLinkSuccess: false,
  addArticleLinkFailure: false,
};

const challengeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_TOPICS_SUCCESS: {
      return {
        ...state,
        allTopics: action.payload,
      };
    }

    case FETCH_ARTICLE_BY_ID_SUCCESS: {
      return {
        ...state,
        articleById: action.payload,
      };
    }

    case FETCH_ALL_ARTICLE_SUCCESS: {
      return {
        ...state,
        allArticles: action.payload,
      };
    }

    case FETCH_ARTICLE_BY_TOPIC_SUCCESS: {
      return {
        ...state,
        articlesByTopic: action.payload,
      };
    }

    case RESTORE_FETCH_ARTICLE_BY_TOPIC: {
      return {
        ...state,
        articlesByTopic: [],
      };
    }

    case FETCH_ARTICLE_BY_USER_SUCCESS: {
      return {
        ...state,
        articleByUser: action.payload,
      };
    }

    case CREATE_ARTICLE_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          createArticleSuccess: true,
          createArticleFailure: false,
        };
      } else {
        return {
          ...state,
          createArticleSuccess: false,
          createArticleFailure: true,
        };
      }
    }

    case RESTORE_CREATE_ARTICLE_INITIAL: {
      return {
        ...state,
        createArticleSuccess: false,
        createArticleFailure: false,
      };
    }

    case EDIT_ARTICLE_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          editArticleSuccess: true,
          editArticleFailure: false,
        };
      } else {
        return {
          ...state,
          editArticleSuccess: false,
          editArticleFailure: true,
        };
      }
    }

    case RESTORE_EDIT_ARTICLE_INITIAL: {
      return {
        ...state,
        editArticleSuccess: false,
        editArticleFailure: false,
      };
    }

    case VOTE_ARTICLE_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          voteArticleSuccess: true,
          voteArticleFailure: false,
        };
      } else {
        return {
          ...state,
          voteArticleSuccess: false,
          voteArticleFailure: true,
        };
      }
    }

    case RESTORE_VOTE_ARTICLE_INITIAL: {
      return {
        ...state,
        voteArticleSuccess: false,
        voteArticleFailure: false,
      };
    }

    case SEND_ARTICLE_LINK_SUCCESS: {
      if (action.payload === true) {
        return {
          ...state,
          addArticleLinkSuccess: true,
          addArticleLinkFailure: false,
        };
      } else {
        return {
          ...state,
          addArticleLinkSuccess: false,
          addArticleLinkFailure: true,
        };
      }
    }

    default:
      return state;
  }
};

export default challengeReducer;
