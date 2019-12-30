import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTHENTICATED } from "../Types";
import axios from "axios";
export const loginUser = (userData, history) => async dispatch => {
  try {
    dispatch({ type: LOADING_UI });
    const res = await axios.post("login", userData);
    setAutorizationHeader(res.data.token)
    dispatch(getUserData());
    dispatch({ type: CLEAR_ERRORS });
    history.push("/");
  } catch (error) {
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

export const signup = (userData, history) => async dispatch => {
    try {
      dispatch({ type: LOADING_UI });
      const res = await axios.post("signup", userData);
      setAutorizationHeader(res.data.tokenId)
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/");
    } catch (error) {
      dispatch({
        type: SET_ERRORS,
        payload: error.response.data
      });
    }
  };

export const getUserData = () => async dispatch => {
  const res = await axios.get("/user");
  dispatch({
    type: SET_USER,
    payload: res.data
  });
};

export const logoutUser = () => async dispatch =>{
    localStorage.removeItem('FirebaseToken')
    delete axios.defaults.headers.common['Authorization'];
    dispatch({
        type:({ type:SET_UNAUTHENTICATED})
    })
}
const setAutorizationHeader = token =>{
    const FirebaseToken = `Bearer ${token}`;
    localStorage.setItem("FirebaseToken", FirebaseToken);
    axios.defaults.headers.common["Authorization"] = FirebaseToken;
}