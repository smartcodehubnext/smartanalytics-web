import { call, put, select } from "redux-saga/effects";
import {
  ANALYTIC_ACCOUNT_FETCH_SUCCESS,
  ANALYTIC_ACCOUNT_FETCH_ERROR,
  ANALYTIC_ACCOUNT_FETCH_START
} from "../Actions";
import {
  GetAuthUrl,
  SaveAccount,
  FetchAccounts
} from "../Service/googleAuthService";
import { FetchAnalyticAccount } from "../Service/analyticAccountService";

const GetAuthState = state => state.authState;

export function* fetchAnalyticAccountsaga({ payload }) {
  console.log(payload);

  const accountId = payload._id;
  yield put({ type: ANALYTIC_ACCOUNT_FETCH_START });
  const { user } = yield select(GetAuthState);
  try {
    const { data } = yield call(FetchAnalyticAccount, user.token, accountId);
    yield put({ type: ANALYTIC_ACCOUNT_FETCH_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: ANALYTIC_ACCOUNT_FETCH_ERROR, payload: e.response });
  }
}
