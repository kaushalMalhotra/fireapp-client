import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, TextField, Grid } from "@material-ui/core";
// import PropTypes from "prop-types";
import { useHistory, Link } from "react-router-dom";
import AppIcon from "../images/potter.jpg";
import CircularProgress from "@material-ui/core/CircularProgress";
import { style } from "../helpers/MuiStyleCss";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../redux/actions/UserActions";
const useStyles = makeStyles(...style);

function Signup() {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const [SignupForm, setSignupForm] = useState({ loading: false, errors: {} });
  const {
    UI: { loading, errors }
  } = useSelector(state => ({
    user: state.user,
    UI: state.UI
  }));
  const handleSubmit = async e => {
    if (e) e.preventDefault();
    const userData = {
      email: SignupForm.email || "",
      password: SignupForm.password || "",
      confirmPassword: SignupForm.confirmPassword || "",
      user: SignupForm.user || ""
    };
    dispatch(signup(userData, history));
  };
  const handleChange = e =>
    setSignupForm({
      ...SignupForm,
      [e.currentTarget.name]: e.currentTarget.value
    });
  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm>
        <img src={AppIcon} alt="Sadu" className={classes.image} />
        <Typography variant="h2" className={classes.pageTitle}>
          SignUp
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
            value={SignupForm.email || ""}
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
            value={SignupForm.password || ""}
            helperText={errors.password}
            error={errors.password ? true : false}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            required={true}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            color="secondary"
            className={classes.textfield}
            value={SignupForm.confirmPassword || ""}
            helperText={errors.confirmPassword}
            error={errors.confirmPassword ? true : false}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            required={true}
            id="user"
            name="user"
            type="text"
            label="User"
            color="secondary"
            className={classes.textfield}
            value={SignupForm.user || ""}
            helperText={errors.user}
            error={errors.user ? true : false}
            onChange={handleChange}
            fullWidth
          />
          {/* {errors.general && (<Typography variant ="body2" className={classes.customError}>{errors.general}</Typography>)} */}
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            className={classes.button}
            disabled={loading}
          >
            Sign Up
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
          <small>
            <br /> Already have an Account ? Login <Link to="/login">Here</Link>
          </small>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
}
Signup.propTypes = {
  // classes: PropTypes.object.isRequired
};
export default Signup;
