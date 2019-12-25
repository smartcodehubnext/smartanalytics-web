import { takeEvery, all } from "redux-saga/effects";
import {
  AUTH_REGISTER,
  AUTH_LOGIN,
  AUTH_EMAIL_VERIFY,
  AUTH_EMAIL_RESEND,
  ACCOUNT_SAVE,
  ACCOUNT_FETCH,
  ACCOUNT_GET_REDIRECT_URL,
  ACCOUNT_SELECT_SUCCESS,
  ACCOUNT_SELECT,
  ANALYTIC_ACCOUNT_FETCH
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
  getRedirectUrlSaga,
  selectAccountssaga
} from "./accountSaga";
import { fetchAnalyticAccountsaga } from "./analyticAccountSaga";

export default function*() {
  yield all([
    takeEvery(AUTH_REGISTER, registerUserSaga),
    takeEvery(AUTH_LOGIN, loginUserSaga),
    takeEvery(AUTH_EMAIL_VERIFY, verifyEmail),
    takeEvery(AUTH_EMAIL_RESEND, resendEmail),

    takeEvery(ACCOUNT_FETCH, fetchAccountssaga),
    takeEvery(ACCOUNT_SAVE, saveAccountsaga),
    takeEvery(ACCOUNT_SELECT, selectAccountssaga),
    takeEvery(ACCOUNT_GET_REDIRECT_URL, getRedirectUrlSaga),
    takeEvery(ANALYTIC_ACCOUNT_FETCH, fetchAnalyticAccountsaga)
  ]);
}
