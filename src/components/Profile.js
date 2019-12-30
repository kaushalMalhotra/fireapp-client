import React from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import EditDetails from './EditDetails'
// MUI
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Paper,
  IconButton,
  Tooltip
} from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import { LocationOn, CalendarToday, KeyboardReturn } from "@material-ui/icons/";
import LinkIcon from "@material-ui/icons/Link";
import EditIcon from "@material-ui/icons/Edit";
import { style } from "../helpers/MuiStyleCss";
import { uploadImage, logoutUser } from "../redux/actions/UserActions";
const useStyles = makeStyles(...style);
export default function Profile() {
  let dispatch = useDispatch();
  const {
    user: {
      credentials: { user, createdAt, imageUrl, bio, website, location },
      loading,
      authenticated
    }
  } = useSelector(state => ({
    user: state.user
  }));
  const handleImageChange = async e => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    dispatch(uploadImage(formData));
  };
  const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const classes = useStyles();
  let profileMarkup = !loading ? (
    authenticated ? (
      <Paper className={classes.paper}>
        <div className={classes.profile}>
          <div className="image-wrapper">
            <img src={imageUrl} alt="Profile" className="profile-image" />
            <input
              type="file"
              id="imageInput"
              onChange={handleImageChange}
              hidden="hidden"
            />
            <Tooltip title="Edit Profile Picture" placement="top">
              <IconButton onClick={handleEditPicture} className="button">
                <EditIcon color="primary" />
              </IconButton>
            </Tooltip>
          </div>
          <hr />
          <MuiLink
            component={Link}
            to={`/users/${user}`}
            color="primary"
            variant="h5"
          >
            @{user}
          </MuiLink>
          <hr />
          {bio && <Typography variant="body2">{bio}</Typography>}
          <hr />
          {location && (
            <React.Fragment>
              <LocationOn color="primary" /> <span>{location}</span>
              <hr />
            </React.Fragment>
          )}
          {website && (
            <React.Fragment>
              <LinkIcon color="primary" />
              <a href={website} target="_blank" rel="noopener noreferrer">
                {""} {website}
              </a>
              <hr />
            </React.Fragment>
          )}
          <CalendarToday color="primary" />
          <span> Joined {dayjs(createdAt).format("MMM YYYY")}</span>
        </div>
        <Tooltip title="Logout" placement="top">
          <IconButton align="left" onClick={handleLogout}>
            <KeyboardReturn color="primary" />
          </IconButton>
        </Tooltip>
        <EditDetails />
      </Paper>
    ) : (
      <Paper className={classes.paper}>
        <Typography variant="body2" align="center">
          No Profile Found, Please Login Again
        </Typography>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/signup"
          >
            Sign Up
          </Button>
        </div>
      </Paper>
    )
  ) : (
    <p>Loading...</p>
  );
  return profileMarkup;
}
