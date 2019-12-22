import React, { useEffect } from "react";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_EMAIL_VERIFY, AUTH_EMAIL_RESEND } from "../store/Actions";
import { Redirect } from "react-router";

export default function VerifyEmail({ match, location }) {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector(state => state.authState);

  useEffect(() => {
    console.log(match, location);
    const { code } = queryString.parse(location.search);
    if (code) dispatch({ type: AUTH_EMAIL_VERIFY, payload: { code: code } });
    return () => {};
  }, []);
  if (user.email) {
    if (user.emailConfirmed) return <Redirect to="/login" />;
  }
  const resendEmail = () => {
    dispatch({ type: AUTH_EMAIL_RESEND, payload: user });
    alert("Please check your email");
  };
  return (
    <div class="lockscreen">
      <div class="login-bg"></div>
      <div class="login-content">
        <div class="login-box">
          <div class="login-header">
            <h3>Welcome Back!</h3>
            <p>Please verify your email To Proceed</p>
          </div>
          <div class="login-body">
            <p class="m-t-sm">
              <button onClick={resendEmail} className="btn btn-primary">
                Resend Email
              </button>
            </p>
          </div>
          <div class="login-footer">
            <p>Copyright @Stacks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
