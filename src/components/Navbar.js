import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <AppBar>
      <ToolBar className="nav-container">
      <Button exact="true" component={Link} to="/">
          Home
        </Button> 
        <Button component={Link} to="/login">
          Login
        </Button>
        <Button component={Link} to="/signup">
          Signup
        </Button>
      </ToolBar>
    </AppBar> 
  );
}
