import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUserDetails } from "../redux/actions/UserActions";
// import { Link } from "react-router-dom";
// MUI
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  IconButton,
  Tooltip,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { style } from "../helpers/MuiStyleCss";
// Redux
const useStyles = makeStyles({ ...style, button: { float: "right" } });
export default function EditDetails() {
  const classes = useStyles();
  let dispatch = useDispatch();
  const [state, setstate] = useState({ open: false });
  const {
    user: { credentials }
  } = useSelector(state => ({
    user: state.user
  }));
  useEffect(() => {
    mapUserDetailsToState(credentials);
  }, [credentials]);

  const handleOpen = () => {
    setstate({ ...state, open: true });
  };
  const handleClose = () => {
    setstate({ ...state, open: false });
  };
  const mapUserDetailsToState = credentials => {
    setstate({
      ...state,
      bio: credentials.bio ? credentials.bio : "",
      website: credentials.website ? credentials.website : "",
      location: credentials.location ? credentials.location : ""
    });
  };
  const userChange = e => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    const userDetails = {
      bio: state.bio,
      website: state.website,
      location: state.location
    };
    dispatch(editUserDetails(userDetails));
    handleClose();
  };
  return (
    <React.Fragment>
      <Tooltip title="Edit Details" placement="top">
        <IconButton onClick={handleOpen} className={classes.button}>
          <EditIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Dialog open={state.open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Your Details</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              name="bio"
              type="text"
              label="Bio"
              multiline
              rows="3"
              placeholder="A short name about Yourself"
              className={classes.textField}
              value={state.bio || ""}
              onChange={userChange}
              fullWidth
            />
            <TextField
              name="website"
              type="text"
              label="Website"
              placeholder="A Professional or Personal Website"
              className={classes.textField}
              value={state.website || ""}
              onChange={userChange}
              fullWidth
            />
            <TextField
              name="location"
              type="text"
              label="Location"
              placeholder="Place Where You Live !"
              className={classes.textField}
              value={state.location || ""}
              onChange={userChange}
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
