import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

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
function Login() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
}
Login.propTypes = {
  classes: PropTypes.object.isRequired
};
export default Login;
