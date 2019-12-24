import { takeEvery, all } from "redux-saga/effects";
import {
  AUTH_REGISTER,
  AUTH_LOGIN,
  AUTH_EMAIL_VERIFY,
  AUTH_EMAIL_RESEND,
  ACCOUNT_SAVE,
  ACCOUNT_FETCH,
  ACCOUNT_GET_REDIRECT_URL
} from "../Actions";
import {
  loginUserSaga,
  registerUserSaga,
  verifyEmail,
  resendEmail
} from "./authSaga";
import {
  fetchAccountssaga,
  saveAccountsaga,
  getRedirectUrlSaga
} from "./accountSaga";

export default function*() {
  yield all([
    takeEvery(AUTH_REGISTER, registerUserSaga),
    takeEvery(AUTH_LOGIN, loginUserSaga),
    takeEvery(AUTH_EMAIL_VERIFY, verifyEmail),
    takeEvery(AUTH_EMAIL_RESEND, resendEmail),

    takeEvery(ACCOUNT_FETCH, fetchAccountssaga),
    takeEvery(ACCOUNT_SAVE, saveAccountsaga),

    takeEvery(ACCOUNT_GET_REDIRECT_URL, getRedirectUrlSaga)
  ]);
}
