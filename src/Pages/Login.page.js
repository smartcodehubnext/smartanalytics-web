import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AUTH_LOGIN } from "../store/Actions";

export default function LoginPage() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.authState);

  const [userModel, setuserModel] = useState({
    email: "",
    password: ""
  });
  if (user.token) {
    if (!user.emailConfirmed) return <Redirect to="/verify-email" />;
    else return <Redirect to="/" />;
  }
  const handleChange = e => {
    e.persist();
    setuserModel({ ...userModel, [e.target.name]: e.target.value });
  };
  const loginuser = () => {
    console.log(userModel);
    dispatch({ type: AUTH_LOGIN, payload: userModel });
  };
  return (
    <div class="login">
      <div class="login-bg"></div>
      <div class="login-content">
        <div class="login-box">
          <div class="login-header">
            <h3>Log In</h3>
            <p>Welcome back! Please login to continue.</p>
          </div>
          <div class="login-body">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  name="email"
                  value={userModel.email}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Your Email "
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="password"
                  value={userModel.password}
                  onChange={handleChange}
                  class="form-control"
                  placeholder="Your password "
                />
              </div>
              <button type="button" onClick={loginuser} class="btn btn-primary">
                Login
              </button>
            </form>
            <p class="m-t-sm">
              <a href="#">Forgot password?</a>
              <br />
              <Link to="/register">Register</Link>
            </p>
          </div>
          <div class="login-footer">
            <p>Copyright @Code hub online education LLP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
