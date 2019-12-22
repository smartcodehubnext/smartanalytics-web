import { call, put } from "redux-saga/effects";
import {
  AUTH_REGISTER_START,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_ERROR,
  AUTH_LOGIN_START,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_EMAIL_RESEND,
  AUTH_EMAIL_RESEND_SUCCESS,
  AUTH_EMAIL_VERIFY_SUCCESS
} from "../Actions";
import {
  RegisterUser,
  LoginUser,
  VerifyEmail,
  ResendEmail
} from "../Service/authService";
export function* registerUserSaga(action) {
  yield put({ type: AUTH_REGISTER_START });
  try {
    const data = yield call(RegisterUser, action.payload);
    console.log(data);

    yield put({ type: AUTH_REGISTER_SUCCESS, payload: data.data });
  } catch (e) {
    console.log(e);

    yield put({ type: AUTH_REGISTER_ERROR, payload: e });
  }
}
export function* loginUserSaga(action) {
  yield put({ type: AUTH_LOGIN_START });
  try {
    const data = yield call(LoginUser, action.payload);

    yield put({ type: AUTH_LOGIN_SUCCESS, payload: data.data });
  } catch (e) {
    yield put({ type: AUTH_LOGIN_ERROR, payload: e.response });
  }
}
export function* verifyEmail(action) {
  yield put({ type: AUTH_LOGIN_START });
  try {
    const data = yield call(VerifyEmail, action.payload);

    yield put({ type: AUTH_EMAIL_VERIFY_SUCCESS });
  } catch (e) {
    yield put({ type: AUTH_LOGIN_ERROR, payload: e.response });
  }
}
export function* resendEmail(action) {
  yield put({ type: AUTH_LOGIN_START });
  try {
    const data = yield call(ResendEmail, action.payload);

    yield put({ type: AUTH_EMAIL_RESEND_SUCCESS });
  } catch (e) {
    yield put({ type: AUTH_LOGIN_ERROR, payload: e.response });
  }
}
