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
import PostKtra from './PostKtra'
export default function Navbar() {
  const { authenticated } = useSelector(state => ({
    authenticated: state.user.authenticated
  }));
  return (
    <AppBar>
      <ToolBar className="nav-container">
        {authenticated ? (
          <Fragment>
            <PostKtra/>
            <MyBtn
              title="Home"
              child={
                <Link to="/">
                  <HomeIcon />
                </Link>
              }
            />
            <MyBtn title="Notifications" child={<Notifications />} />
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
