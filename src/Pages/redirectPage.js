import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { AuthGCode } from "../store/Service/googleAuthService";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { ACCOUNT_SAVE } from "../store/Actions";
export default function RedirectPage({ match, location }) {
  const dispatch = useDispatch();
  const { redirectUrl } = useSelector(state => state.accountState);
  const [code, setcode] = useState();
  const [name, setName] = useState("");
  const SaveAccount = () => {
    dispatch({ type: ACCOUNT_SAVE, payload: { code, name } });
  };
  useEffect(() => {
    if (!code) {
      const { code } = queryString.parse(location.search);
      console.log(code);
      setcode(code);
    }
    // const token = await AuthGCode(code);
    //console.log(token);

    return () => {};
  }, []);
  if (!redirectUrl) {
    return <Redirect to="/" />;
  }
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title"> Name To Your Connected Account</h5>
            <form>
              <div class="form-group">
                <input
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                  type="text"
                  class="form-control"
                  placeholder="Account Name ..."
                />
              </div>
            </form>
            <button onClick={SaveAccount} class="btn btn-primary">
              Save Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
