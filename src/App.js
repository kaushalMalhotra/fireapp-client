import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Pages Import
import Login from "./pages/login";
import Home from "./pages/home";
import Signup from "./pages/signup";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#FFC400",
      dark: "#002884",
      contrastText: "#FFC400"
    },
    secondary: {
      light: "#ff7961",
      main: "#D50000",
      dark: "#ba000d",
      contrastText: "#000"
    },
    default: {
      light: "#ff5252",
      main: "#ff1744",
      dark: "#d50000",
      contrastText: "#ffebee"
    },
    typography: {
      useNextVariants: true
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="container">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
