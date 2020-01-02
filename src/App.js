import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import jwtDecode from "jwt-decode";
import Axios from "axios";

// components
import Navbar from "./components/layout/Navbar";
import AuthRoute from "./helpers/AuthRoute";
import { Basictheme } from "./helpers/MuiStyleCss";

// Redux
import { Provider } from "react-redux";
import store from "./redux/Store";
import { SET_AUTHENTICATED } from "./redux/Types";
import { logoutUser, getUserData } from "./redux/actions/UserActions";

// Pages Import
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";

const theme = createMuiTheme(...Basictheme);
let authenticated;
const token = localStorage.FirebaseToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    Axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="container">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <AuthRoute path="/login" component={Login} />
              <AuthRoute path="/signup" component={Signup} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
