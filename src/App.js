/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import HomePage from "./Pages/HomePage";
import PrivacyPage from "./Pages/Privacy-page";

import RedirectPage from "./Pages/redirectPage";
import LoginPage from "./Pages/Login.page";
import { store } from "./store/store";
import SecureLayout from "./Layouts/SecureLayout";
import RegisterPage from "./Pages/RegisterPage";
import VerifyEmail from "./Pages/VerifyEmail";
import StaticLayout from "./Layouts/StaticLayout";
import Accountdetail from "./Pages/Accounts/Accountdetail";
const StaticRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <StaticLayout>
          <Component {...props} />
        </StaticLayout>
      )}
    />
  );
};
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector(state => state.authState);
  return (
    <Route
      {...rest}
      render={props =>
        user &&  user.token ? (
          user.emailConfirmed ? (
            <SecureLayout>
              <Component {...props} />
            </SecureLayout>
          ) : (
            <Redirect to="/verify-email" />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={LoginPage} exact path="/login" />
          <Route component={RegisterPage} exact path="/register" />
          <PrivateRoute component={HomePage} exact path="/" />
          <PrivateRoute component={HomePage} exact path="/home" />
          <PrivateRoute component={RedirectPage} path="/redirect" />
          <PrivateRoute component={Accountdetail} path="/account" />
          <StaticRoute component={PrivacyPage} exact path="/privacy-policy" />
          <Route component={VerifyEmail} exact path="/verify-email" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
