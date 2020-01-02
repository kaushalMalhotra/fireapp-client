import {
  SET_KTRAS,
  LOADING_DATA,
  LIKE_KTRA,
  UNLIKE_KTRA,
  DELETE_KTRA,
  POST_KTRA,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_KTRA,
  STOP_LOADING_UI
} from "../Types";
import Axios from "axios";

// Get All Ktra
export const getKtras = () => async dispatch => {
  try {
    dispatch({ type: LOADING_DATA });
    const res = await Axios.get("ktra");
    dispatch({
      type: SET_KTRAS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: SET_KTRAS,
      payload: []
    });
  }
};

// Like Ktra
export const likeKtra = ktraId => async dispatch => {
  try {
    const res = await Axios.get(`ktra/${ktraId}/like`);
    dispatch({
      type: LIKE_KTRA,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
// Unlike Ktra
export const unlikeKtra = ktraId => async dispatch => {
  try {
    const res = await Axios.get(`ktra/${ktraId}/unlike`);
    dispatch({
      type: UNLIKE_KTRA,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete Ktra
export const deleteKtra = ktraId => async dispatch => {
  try {
    await Axios.delete(`ktra/${ktraId}`);
    dispatch({
      type: DELETE_KTRA,
      payload: ktraId
    });
  } catch (error) {
    console.log(error);
  }
};

// Post a Ktra
export const postKtra = newKtra => async dispatch => {
  try {
    dispatch({ type: LOADING_UI });
    const res = await Axios.post("ktra", newKtra);
    dispatch({
      type: POST_KTRA,
      payload: res.data
    });
    dispatch({ type: CLEAR_ERRORS });
  } catch (error) {
    console.log(error.reponse.data)
    dispatch({
      type: SET_ERRORS,
      payload: error.response.data
    });
  }
};

// Clear Errors
export const clearErrors = () => async dispatch =>{
  dispatch({type:CLEAR_ERRORS })
}

// GetSingle Ktra
export const getSingleKtra = (ktraId) =>async dispatch =>{
  try {
    dispatch({type:LOADING_UI})
    const res = await Axios.get(`ktra/${ktraId}`)
    dispatch({
      type:SET_KTRA,
      payload:res.data
    })
    dispatch({type:STOP_LOADING_UI})
  } catch (err) {
    console.log(err)
  }
}
