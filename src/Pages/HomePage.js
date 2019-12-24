import React, { useEffect } from "react";
import Chart from "chart.js";
import { GetAuthUrl } from "../store/Service/googleAuthService";
import { useDispatch, useSelector } from "react-redux";
import { ACCOUNT_FETCH, ACCOUNT_GET_REDIRECT_URL } from "../store/Actions";
export default function HomePage({ match, location }) {
  const dispatch = useDispatch();
  const { accounts, loading, error, redirectUrl } = useSelector(
    state => state.accountState
  );
  useEffect(() => {
    dispatch({ type: ACCOUNT_FETCH });
    return () => {};
  }, [match]);

  if (redirectUrl) {
    window.location.assign(redirectUrl);
  }
  return (
    <div className="row justify-content-center">
      {accounts &&
        accounts.map(a => {
          return <AccountCard account={a} key={a}></AccountCard>;
        })}
      <AddAccountCard></AddAccountCard>
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
  const selectAccount = async () => {};
  return (
    <div className="col-lg-3">
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">{account.name}</h5>

          <button onClick={selectAccount} class="btn btn-primary">
            Select Account
          </button>
        </div>
      </div>
    </div>
  );
};
