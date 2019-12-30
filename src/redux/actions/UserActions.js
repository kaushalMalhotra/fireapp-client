import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  LOADING_USER
} from "../Types";
import axios from "axios";
export const loginUser = (userData, history) => async dispatch => {
  try {
    dispatch({ type: LOADING_UI });
    const res = await axios.post("login", userData);
    setAutorizationHeader(res.data.token);
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
    setAutorizationHeader(res.data.tokenId);
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
  dispatch({ type: LOADING_USER });
  const res = await axios.get("/user");
  dispatch({
    type: SET_USER,
    payload: res.data
  });
};

export const logoutUser = () => async dispatch => {
  localStorage.removeItem("FirebaseToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};
export const uploadImage = formData => async dispatch => {
  try {
    dispatch({ type: LOADING_USER });
    await axios.post("user/image", formData);
    dispatch(getUserData());
  } catch (error) {
    console.log(error);
  }
};
export const editUserDetails = (userDetails) =>async dispatch =>{
  try {
    dispatch({type:LOADING_USER})
    await axios.post('/user',userDetails)
    dispatch(getUserData())
  } catch (error) {
    console.log(error)
  }
}
const setAutorizationHeader = token => {
  const FirebaseToken = `Bearer ${token}`;
  localStorage.setItem("FirebaseToken", FirebaseToken);
  axios.defaults.headers.common["Authorization"] = FirebaseToken;
};
