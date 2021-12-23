import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  SET_ALERT,
  REMOVE_ALERT,
  SET_LOADING,
  CLEAR_USERS
} from "./type";

export const GithubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
      case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
      case CLEAR_USERS:
      return {
        ...state,
        users:[],
      };
      case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
      case REMOVE_ALERT:
      return {
        ...state,
        alert:null
      };
    case SET_ALERT:
      return {
        ...state,
        alert: {
          msg: action.payload.msg,
          type: action.payload.type,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return;
  }
};
