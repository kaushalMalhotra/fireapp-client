import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Typography, TextField, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AppIcon from "../images/potter.jpg";

const useStyles = makeStyles(theme => ({
  form: {
    textAlign: "center",
    margin: 10
  },
  image: {
    margin: "20px auto 20px auto",
    height: "100px"
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: "10px"
  }
}));

function Login() {
  const classes = useStyles();
  const theme = useTheme();
  let history = useHistory();
  const [LoginForm, setLoginForm] = useState({ errors: {} });
  const handleSubmit = e => {
    e.preventDefault();
    try {
      setLoginForm({ loading: true });
      const userData = {
        email: LoginForm.email,
        password: LoginForm.password
      };
      // const res = await axios.post("/login", userData);
      // const data = await res.data;
      axios.post("/login", userData).then(res => {
        console.log(res.data);
        setLoginForm({ loading: false });
        history.push("/");
      });
      // console.log(data);
    } catch (error) {
      setLoginForm({
        errors: error.response.data,
        loading: false
      });
    }
  };
  const handleChange = e =>
    setLoginForm({
      ...LoginForm,
      [e.currentTarget.name]: e.currentTarget.value
    });
  const { errors, loading } = LoginForm;
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
            id="email"
            name="email"
            type="email"
            label="Email"
            color="secondary"
            className={classes.textfield}
            value={LoginForm.email || ""}
            // helperText={errors.Email}
            // error={errors.Email ? true : false}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            color="secondary"
            className={classes.textfield}
            value={LoginForm.password || ""}
            // helperText={errors.password}
            // error={errors.password ? true : false}
            onChange={handleChange}
            fullWidth
          />
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
}
Login.propTypes = {
  // classes: PropTypes.object.isRequired
};
export default Login;
