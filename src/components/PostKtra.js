import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postKtra, clearErrors } from "../redux/actions/DataActions";
import { style } from "../helpers/MuiStyleCss";
import MyBtn from "../helpers/MuiBtn";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles({
  ...style,
  submitButton: {
    position: "relative",
    margin: "5px",
    float: "right"
  },
  progressSpinner: {
    position: "absolute"
  },
  closeButton: {
    position: "absolute",
    left: "90%",
    top: "10%"
  }
});
export default function PostKtra() {
  const classes = useStyles();
  let dispatch = useDispatch();
  const [state, setState] = useState({
    open: false,
    body: "",
    errors: {}
  });
  const { UI } = useSelector(state => ({
    UI: state.UI
  }));
  const handleOpen = () => {
    setState({
      ...state,
      open: true
    });
  };
  const handleClose = () => {
    dispatch(clearErrors());
    setState({
      ...state,
      open: false,
      errors: {}
    });
  };
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postKtra({ body: state.body || "" }));
    setState({
      ...state,
      errors: UI.errors
    });
    if (!UI.loading) handleClose();
  };
  const { errors } = state;
  let PostKtraBtn = (
    <React.Fragment>
      <MyBtn
        title=" Post a Ktra"
        onClick={handleOpen}
        placement="top"
        child={<AddIcon />}
      />
      <Dialog open={state.open} onClose={handleClose} fullWidth maxWidth="sm">
        <MyBtn
          title="Close"
          onClick={handleClose}
          btnClass={classes.closeButton}
          child={<CloseIcon />}
        />
        <DialogTitle>Post a New Ktra</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              name="body"
              type="text"
              label="KTRA !"
              multiline
              rows="3"
              placeholder="Post Ktra to your Friend"
              error={errors.error ? true : false}
              helperText={errors.error}
              className={classes.textField}
              onChange={handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
              disabled={UI.loading}
            >
              Submit
              {UI.loading && (
                <CircularProgress
                  size={30}
                  className={classes.progressSpinner}
                />
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );

  return PostKtraBtn;
}
