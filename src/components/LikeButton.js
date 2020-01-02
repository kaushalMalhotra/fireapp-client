import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeKtra, unlikeKtra } from "../redux/actions/DataActions";
import MyBtn from "../helpers/MuiBtn";
import { Link } from "react-router-dom";

// Icons
import FavouriteBorder from "@material-ui/icons/FavoriteBorder";
import FavouriteIcon from "@material-ui/icons/Favorite";

export default function LikeButton({ ktraId }) {
  let dispatch = useDispatch();
  const {
    userData: { authenticated, likes }
  } = useSelector(state => ({
    userData: state.user
  }));
  const likedKtra = () => {
    if (likes && likes.find(like => like.ktraId === ktraId)) return true;
    else return false;
  };
  const likesKtra = () => {
    dispatch(likeKtra(ktraId));
  };

  const unlikesKtra = () => {
    dispatch(unlikeKtra(ktraId));
  };

  const likeButton = !authenticated ? (
    <Link to="/login">
      <MyBtn
        title="Like"
        placement="top"
        child={<FavouriteBorder color="primary" />}
      />
    </Link>
  ) : likedKtra() ? (
    <MyBtn
      title="Unlike"
      placement="top"
      onClick={unlikesKtra}
      child={<FavouriteIcon color="primary" />}
    />
  ) : (
    <MyBtn
      title="Like"
      placement="top"
      onClick={likesKtra}
      child={<FavouriteBorder color="primary" />}
    />
  );
  return likeButton;
}
