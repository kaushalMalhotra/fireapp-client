import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleKtra } from "../../redux/actions/DataActions";
import { Link } from "react-router-dom";
import { style } from "../../helpers/MuiStyleCss";
import { makeStyles } from "@material-ui/core/styles";
import MyBtn from "../../helpers/MuiBtn";

// Dayjs
import dayjs from "dayjs";

// MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  ...style,
  commentImage: {
    maxWidth: "100%",
    height: 100,
    objectFit: "cover",
    borderRadius: "50%",
    marginLeft: "25px"
  },
  commentData: {
    marginLeft: "30px"
  },
  invisibleSeparator: {
    border: "none",
    margin: "4px"
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    marginBottom: "20px"
  }
});
export default function Comments({ comments }) {
  const classes = useStyles();
  return (
    <Grid container>
      {comments.map(comment => {
        const { body, createdAt, userImage, userHandle } = comment;
        return (
          <React.Fragment key={createdAt}>
            <Grid item sm={12}>
              <Grid container>
                <Grid item sm={2}>
                  <img
                    src={userImage}
                    alt=""
                    className={classes.commentImage}
                  />
                </Grid>
                <Grid item sm={9}>
                  <div className={classes.commentData}>
                    <Typography
                      variant="h5"
                      component={Link}
                      to={`/users/${userHandle}`}
                      color="primary"
                    >
                      {userHandle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
                    </Typography>
                    <hr className={classes.invisibleSeparator} />
                    <Typography variant="body1">{body}</Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <hr className={classes.visibleSeparator} />
          </React.Fragment>
        );
      })}
    </Grid>
  );
}
