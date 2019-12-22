import { takeEvery, all } from "redux-saga/effects";
import {
  AUTH_REGISTER,
  AUTH_LOGIN,
  AUTH_EMAIL_VERIFY,
  AUTH_EMAIL_RESEND
} from "../Actions";
import {
  loginUserSaga,
  registerUserSaga,
  verifyEmail,
  resendEmail
} from "./authSaga";

export default function*() {
  yield all([
    takeEvery(AUTH_REGISTER, registerUserSaga),
    takeEvery(AUTH_LOGIN, loginUserSaga),
    takeEvery(AUTH_EMAIL_VERIFY, verifyEmail),
    takeEvery(AUTH_EMAIL_RESEND, resendEmail)
  ]);
}
