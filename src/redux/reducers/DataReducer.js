import {
  SET_KTRAS,
  SET_KTRA,
  LIKE_KTRA,
  UNLIKE_KTRA,
  LOADING_DATA,
  DELETE_KTRA,
  POST_KTRA
} from "../Types";

const initialState = {
  ktras: [],
  ktra: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_KTRAS:
      return {
        ...state,
        ktras: action.payload,
        loading: false
      };
    case SET_KTRA:
      return {
        ...state,
        ktra: action.payload
      };
    case LIKE_KTRA:
    case UNLIKE_KTRA:
      let index = state.ktras.findIndex(
        ktra => ktra.ktraId === action.payload.ktraId
      );
      state.ktras[index] = action.payload;
      if(state.ktra.ktraId === action.payload.ktraId){
        state.ktra = action.payload;
      }
      return {
        ...state
      };
    case DELETE_KTRA:
      let id = state.ktras.findIndex(ktra => ktra.ktraId === action.payload);
      state.ktras.splice(id, 1);
      return {
        ...state
      };
    case POST_KTRA:
      return {
        ...state,
        ktras: [action.payload, ...state.ktras]
      };
    default:
      return state;
  }
}
