import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MyBtn from "../helpers/MuiBtn";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import Notifications from "@material-ui/icons/Notifications";
import { Tooltip, IconButton } from "@material-ui/core";

export default function Navbar() {
  const { authenticated } = useSelector(state => ({
    authenticated: state.user.authenticated
  }));
  return (
    <AppBar>
      <ToolBar className="nav-container">
        {authenticated ? (
          <Fragment>
            <MyBtn title="Home" child={<AddIcon color="primary" />} />
            <MyBtn
              title="Home"
              child={
                <Link to="/">
                  <HomeIcon color="primary" />
                </Link>
              }
            />
            <MyBtn
              title="Notifications"
              child={<Notifications color="primary" />}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Button exact="true" component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="/login">
              Login
            </Button>
            <Button component={Link} to="/signup">
              Signup
            </Button>
          </Fragment>
        )}
      </ToolBar>
    </AppBar>
  );
}
