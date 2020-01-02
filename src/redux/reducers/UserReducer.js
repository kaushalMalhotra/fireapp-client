import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_KTRA,
  UNLIKE_KTRA
} from "../Types";

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    case LIKE_KTRA:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.user,
            ktraId: action.payload.ktraId
          }
        ]
      };
    case UNLIKE_KTRA:
      return {
        ...state,
        likes: state.likes.filter(like => like.ktraId !== action.payload.ktraId)
      };
    default:
      return state;
  }
}
