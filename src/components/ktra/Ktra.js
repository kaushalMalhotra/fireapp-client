import React from "react";
import { useSelector} from "react-redux";

import { Link } from "react-router-dom";
import { style } from "../../helpers/MuiStyleCss";
import DeleteKtra from "./DeleteKtra";
import KtraDialog from "./KtraDialog";
import MyBtn from "../../helpers/MuiBtn";
import LikeButton from "./LikeButton";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ChatIcon from "@material-ui/icons/Chat";

// Dayjs
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
const useStyles = makeStyles(...style);
function Ktra({ ktra }) {
  const classes = useStyles();

  const {
    userData: { authenticated, credentials }
  } = useSelector(state => ({
    userData: state.user
  }));
  const { userImage, body, createdAt, user, likeCount, commentCount } = ktra;

  const deleteButton =
    authenticated && credentials.user === ktra.user ? (
      <DeleteKtra ktraId={ktra.ktraId} />
    ) : null;
  dayjs.extend(relativeTime);
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={userImage}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component={Link}
            to={`/users/${user}`}
            color="primary"
            variant="h5"
          >
            {user}
          </Typography>
          {deleteButton}
          <Typography variant="subtitle1" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {body}
          </Typography>
          <LikeButton ktraId={ktra.ktraId} />
          <span>{likeCount} Likes</span>
          <MyBtn
            title="Comments"
            placement="top"
            child={<ChatIcon color="primary" />}
          />
          <span>{commentCount} Comments</span>
          <KtraDialog ktraIdSingle={ktra.ktraId} userHandle={user} />
        </CardContent>
      </div>
    </Card>
  );
}

export default Ktra;
