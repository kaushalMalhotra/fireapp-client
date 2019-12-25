import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Pages Import
import login from "./pages/login";
import home from "./pages/home";
import signup from "./pages/signup";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#FFC400',
      dark: '#002884',
      contrastText: '#FFC400',
    },
    secondary: {
      light: '#ff7961',
      main: '#D50000',
      dark: '#ba000d',
      contrastText: '#000',
    },
    typography:{
      useNextVariants:true
    }
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
          </Switch>
        </div>
      </Fragment>
    </MuiThemeProvider>
  );
}

export default App;
