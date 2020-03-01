import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { ANALYTIC_DATA_FETCH } from "../../store/Actions";

export default  function Accountdetail({ match }) {
  const { analyticAccounts, records, loading, error } = useSelector(
    state => state.analyticAccountState
  );
  const {
    selectedaccount
  } = useSelector(state => state.accountState);

  const dispatch = useDispatch();
  // selected values
  const [account, setAccount] = useState();
  const [property, setProp] = useState();
  const [view, setView] = useState();

  const [properties, setproperties] = useState([]);
  const [views, setViews] = useState([]);

  useEffect(() => {
    
    if (analyticAccounts && analyticAccounts.length) {
      //set defaults
      setAccount(analyticAccounts[0]);

      setproperties(analyticAccounts[0].webProperties);
      setProp(analyticAccounts[0].webProperties[0]);

      setViews(analyticAccounts[0].webProperties[0].profiles);
      setView(analyticAccounts[0].webProperties[0].profiles[0]);
    }
    
    return () => {};
  }, [analyticAccounts]);

  const onaccountchange = e => {
    e.persist();
    console.log(e);

    const acc = analyticAccounts.find(a => a._id == e.target.value);
    setAccount(acc);
    setproperties(acc.webProperties);
    setProp(acc.webProperties[0]);
    
    setViews(acc.webProperties[0].profiles);
    setView(acc.webProperties[0].profiles[0]);
  };
  const onpropertychange = e => {
    e.persist();
    console.log(e.target.value);

    const webProperties = account.webProperties.find(
      a => a.id == e.target.value
    );

    setViews(webProperties.profiles);
    setView(webProperties.profiles[0]);
  };

  const onviewChange =  e => {
    e.persist();
    console.log(e.target.value);

    const profile = property.profiles.find(a => a.id == e.target.value);
    setView(profile);

    dispatch({ type: ANALYTIC_DATA_FETCH, payload: {viewId:profile.id,accountId:selectedaccount._id} });
  };

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <div class="row">
        <div class="col-xl">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="form-group col-md-4">
                    <label for="inputState">Analytic Account</label>
                    <select
                      onChange={onaccountchange}
                      class="form-control custom-select"
                    >
                      {analyticAccounts
                        .filter(
                          a => a.webProperties && a.webProperties.length > 0
                        )
                        .map(a => (
                          <option key={a._id} value={a._id}>
                            {a.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">properties</label>
                    <select
                      onChange={onpropertychange}
                      class="form-control custom-select"
                    >
                      {properties
                        .filter(a => a.profiles && a.profiles.length > 0)
                        .map(a => {
                          console.log(a);

                          return (
                            <option key={a.id} value={a.id}>
                              {a.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputState">views</label>
                    <select
                      onChange={onviewChange}
                      class="form-control custom-select"
                    >
                      {views.map(a => (
                        <option key={a.id} value={a.id}>
                          {a.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
              <div className="row">
               {records &&  <pre>{JSON.stringify(records, null, 4)}</pre>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
