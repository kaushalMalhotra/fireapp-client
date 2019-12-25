import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
const Link = require('react-router-dom').Link



export class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <AppBar>
          <ToolBar className="nav-container">
            <Button exact="true" component={Link} to="/">Home</Button>
            <Button component={Link} to="/login">Login</Button>
            <Button component={Link} to="/signup">Signup</Button>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}
export default Navbar;
