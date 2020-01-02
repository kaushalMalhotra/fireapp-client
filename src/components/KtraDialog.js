import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleKtra } from "../redux/actions/DataActions";
import { Link } from "react-router-dom";
import { style } from "../helpers/MuiStyleCss";
import MyBtn from "../helpers/MuiBtn";

// Dayjs
import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";

// MUI
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import CircularProgress from "@material-ui/core/CircularProgress";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";

// Icons
import ChatIcon from "@material-ui/icons/Chat";
import CloseIcon from "@material-ui/icons/Close";
import UnfoldMore from "@material-ui/icons/UnfoldMore";
import { CircularProgress } from "@material-ui/core";
import LikeButton from "./LikeButton";

const useStyles = makeStyles({
  ...style,
  invisibleSepartor: {
    border: "none",
    margin: "4px"
  },
  profileImage: {
    maxWidth: 200,
    height: 200,
    borderRadius: "50%",
    objectFit: "cover"
  },
  dialogContent: {
    padding: 20
  },
  closeButton: {
    position: "absolute",
    left: "90%"
  },
  expandButton: {
    position: "absolute",
    left: "90%"
  },
  spinner: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50
  }
});
export default function KtraDialog({ ktraIdSingle, userHandle }) {
  const classes = useStyles();
  let dispatch = useDispatch();
  const [state, setState] = useState({
    open: false
  });
  const {
    UI: { loading },
    ktra: { ktraId, body, createdAt, likeCount, commentCount, userImage, user }
  } = useSelector(state => ({
    UI: state.UI,
    ktra: state.data.ktra
  }));
  const handleOpen = () => {
    setState({
      ...state,
      open: true
    });
    dispatch(getSingleKtra(ktraIdSingle));
  };
  const handleClose = () => {
    // dispatch(clearErrors());
    setState({
      ...state,
      open: false,
      errors: {}
    });
  };

  const dialogMarkup = loading ? (
    <div className={classes.spinner}>
      <CircularProgress thickness={1} size={200} />
    </div>
  ) : (
    <Grid container spacing={15}>
      <Grid item sm={5}>
        <img
          src={userImage}
          alt="Profile Image"
          className={classes.profileImage}
        />
      </Grid>
      <Grid item sm={7}>
        <Typography
          component={Link}
          color="primary"
          variant="h5"
          to={`/users/${user}`}
        >
          @{user}
        </Typography>
        <hr className={classes.invisibleSepartor} />
        <Typography variant="body2" color="textSecondary">
          {dayjs(createdAt).format("h:mm a,MMMM DD YYYY")}
        </Typography>
        <hr className={classes.invisibleSepartor} />
        <Typography variant="body1">{body}</Typography>
        <LikeButton ktraId={ktraIdSingle}/>
        <span>{likeCount} Likes</span>
        <MyBtn
          title="Comments"
          child={<ChatIcon />}
        />
        <span>{commentCount} Comments</span>
      </Grid>
    </Grid>
  );
  return (
    <React.Fragment>
      <MyBtn
        title="Expand Ktra"
        onClick={handleOpen}
        btnClass={classes.expandButton}
        child={<UnfoldMore color="secondary" />}
      />
      <Dialog open={state.open} onClose={handleClose} fullWidth maxWidth="sm">
        <MyBtn
          title="Close"
          onClick={handleClose}
          btnClass={classes.closeButton}
          child={<CloseIcon />}
        />
        <DialogContent className={classes.dialogContent}>
          {dialogMarkup}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
