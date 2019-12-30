import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    margin: 10
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 150
  }
}));
function Ktra({ ktra }) {
  const classes = useStyles();
  const { userImage, body, createdAt, user } = ktra;
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
          <Typography variant="subtitle1" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {body}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

export default Ktra;
