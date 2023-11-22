import { 

    FETCH_ARTICLE_TOPICS_SUCCESS,
    FETCH_ALL_ARTICLE_SUCCESS,
    FETCH_ARTICLE_BY_TOPIC_SUCCESS,
    CREATE_ARTICLE_SUCCESS,
    RESTORE_CREATE_ARTICLE_INITIAL,
    EDIT_ARTICLE_SUCCESS,
    RESTORE_EDIT_ARTICLE_INITIAL,
    FETCH_ARTICLE_BY_ID_SUCCESS,
    VOTE_ARTICLE_SUCCESS,
    FETCH_ARTICLE_BY_USER_SUCCESS

 } from "../ActionTypes";

const INIT_STATE = {
  allTopics: [],
  allArticles:[],
  articlesByTopic:[],

  createArticleSuccess:false,
  createArticleFailure:false,

  editArticleSuccess:false,
  editArticleFailure:false,

  articleById:{},

  voteArticleSuccess:false,
  voteArticleFailure:false,

  articleByUser:[]


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
    

    default:
      return state;
  }
};

export default challengeReducer;
