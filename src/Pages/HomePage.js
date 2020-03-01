import React, { useEffect } from "react";
import Chart from "chart.js";
import { GetAuthUrl } from "../store/Service/googleAuthService";
import { useDispatch, useSelector } from "react-redux";
import {
  ACCOUNT_FETCH,
  ACCOUNT_GET_REDIRECT_URL,
  ACCOUNT_SELECT,
  ANALYTIC_ACCOUNT_FETCH
} from "../store/Actions";
import { useHistory } from "react-router-dom";
export default function HomePage({ match, location }) {
  const dispatch = useDispatch();

  const {
    accounts,
    loading,
    error,
    redirectUrl,
    selectedaccount
  } = useSelector(state => state.accountState);

  useEffect(() => {
    dispatch({ type: ACCOUNT_FETCH });

    return () => {};
  }, []);

  if (redirectUrl) {
    window.location.assign(redirectUrl);
  }
  return (
    <div className="row justify-content-center">
      <AddAccountCard></AddAccountCard>
      {accounts &&
        accounts.map(a => {
          return <AccountCard account={a} key={a}></AccountCard>;
        })}
    </div>
  );
}

const AddAccountCard = () => {
  const dispatch = useDispatch();
  const AddGoogleAccount = async () => {
    dispatch({ type: ACCOUNT_GET_REDIRECT_URL });
  };
  return (
    <div className="col-lg-3">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Add Account</h5>

          <button onClick={AddGoogleAccount} class="btn btn-primary">
            Add Account
          </button>
        </div>
      </div>
    </div>
  );
};

const AccountCard = ({ account }) => {
  const dispatch = useDispatch();
  const {
    accounts,
    loading,
    error,
    redirectUrl,
    selectedaccount
  } = useSelector(state => state.accountState);
  const historystack = useHistory();
  const selectAccount = async () => {
    dispatch({ type: ACCOUNT_SELECT, payload: account });
    historystack.push(`./account`)

  };
  return (
    <div className="col-lg-4">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">{account.name}</h5>

          <button onClick={selectAccount} class="btn float-left btn-primary">
            Set Default
          </button>
          <button onClick={selectAccount} class="btn float-right btn-danger">
            Drill In <i className="fa fa-arrow-right px-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
