import { call, put, select } from "redux-saga/effects";
import {
  ACCOUNT_GET_REDIRECT_URL,
  ACCOUNT_GET_REDIRECT_URL_START,
  ACCOUNT_GET_REDIRECT_URL_SUCCESS,
  ACCOUNT_GET_REDIRECT_URL_ERROR,
  ACCOUNT_SAVE_START,
  ACCOUNT_SAVE_SUCCESS,
  ACCOUNT_SAVE_ERROR,
  ACCOUNT_FETCH_SUCCESS,
  ACCOUNT_FETCH_ERROR,
  ACCOUNT_FETCH_START
} from "../Actions";
import {
  GetAuthUrl,
  SaveAccount,
  FetchAccounts
} from "../Service/googleAuthService";

const GetAuthState = state => state.authState;
export function* getRedirectUrlSaga() {
  yield put({ type: ACCOUNT_GET_REDIRECT_URL_START });

  try {
    const { data } = yield call(GetAuthUrl);
    yield put({ type: ACCOUNT_GET_REDIRECT_URL_SUCCESS, payload: data.url });
  } catch (e) {
    yield put({ type: ACCOUNT_GET_REDIRECT_URL_ERROR, payload: e.response });
  }
}

export function* saveAccountsaga(action) {
  yield put({ type: ACCOUNT_SAVE_START });
  const { user } = yield select(GetAuthState);
  try {
    const { data } = yield call(SaveAccount, {
      data: action.payload,
      token: user.token
    });
    yield put({ type: ACCOUNT_SAVE_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: ACCOUNT_SAVE_ERROR, payload: e.response });
  }
}
export function* fetchAccountssaga() {
  yield put({ type: ACCOUNT_FETCH_START });
  const { user } = yield select(GetAuthState);
  try {
    const { data } = yield call(FetchAccounts, user.token);
    yield put({ type: ACCOUNT_FETCH_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: ACCOUNT_FETCH_ERROR, payload: e.response });
  }
}
