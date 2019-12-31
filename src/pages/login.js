import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, TextField, Grid } from "@material-ui/core";
// import PropTypes from "prop-types";
import { useHistory, Link } from "react-router-dom";
import AppIcon from "../images/potter.jpg";
import CircularProgress from "@material-ui/core/CircularProgress";
import { style } from "../helpers/MuiStyleCss";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/UserActions";

const useStyles = makeStyles(...style);
function Login() {
  const classes = useStyles();
  let history = useHistory();
  const [LoginForm, setLoginForm] = useState({ errors: {} });
  const {
    UI: { loading, errors }
  } = useSelector(state => ({
    user: state.user,
    UI: state.UI
  }));
  const dispatch = useDispatch();
  const handleSubmit = e => {
    if (e) e.preventDefault();
    const userData = {
      email: LoginForm.email || "",
      password: LoginForm.password || ""
    };
    dispatch(loginUser(userData, history));
  };

  const handleChange = e =>
    setLoginForm({
      ...LoginForm,
      [e.currentTarget.name]: e.currentTarget.value
    });
  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt="Sadu" className={classes.image} />
        <Typography variant="h2" className={classes.pageTitle}>
          Login
        </Typography>
        <form noValidate onSubmit={e => handleSubmit(e)}>
          <TextField
            required={true}
            id="email"
            name="email"
            type="email"
            label="Email"
            color="secondary"
            className={classes.textfield}
            value={LoginForm.email || ""}
            helperText={errors.email}
            error={errors.email ? true : false}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            required={true}
            id="password"
            name="password"
            type="password"
            label="Password"
            color="secondary"
            className={classes.textfield}
            value={LoginForm.password || ""}
            helperText={errors.password}
            error={errors.password ? true : false}
            onChange={handleChange}
            fullWidth
          />
          {/* {errors.general && (<Typography variant ="body2" className={classes.customError}>{errors.general}</Typography>)} */}
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
            disabled={loading}
          >
            Login
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
          <small>
            <br /> Don't have an Account ? Sign Up Now{" "}
            <Link to="/signup">Here</Link>
          </small>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
}
// Login.propTypes = {
//   // classes: PropTypes.object.isRequired
//   // loginUser: PropTypes.func.isRequired,
//   // user: PropTypes.object.isRequired,
//   // UI: PropTypes.object.isRequired
// };
export default Login;
