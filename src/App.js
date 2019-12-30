import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { Basictheme } from "./helpers/MuiStyleCss";
import jwtDecode from "jwt-decode";
import AuthRoute from "./helpers/AuthRoute";
// Redux
import { Provider } from "react-redux";
import store from "./redux/Store";

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
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
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
              <AuthRoute
                authenticated={authenticated}
                path="/login"
                component={Login}
              />
              <AuthRoute
                authenticated={authenticated}
                path="/signup"
                component={Signup}
              />
            </Switch>
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
