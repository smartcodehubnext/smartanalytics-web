import * as ActionTypes from "../Actions";
const initialState = {
  analyticAccounts: [],
  records:[],
  loading: false,
  error: undefined
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //#region ANALYTIC_ACCOUNT_FETCH
    case ActionTypes.ANALYTIC_ACCOUNT_FETCH_START :
      return {
        ...state,
        loading: true,
        analyticAccounts: [],
        error: ""
      };
    case ActionTypes.ANALYTIC_ACCOUNT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        analyticAccounts: [...payload],
        error: ""
      };
    case ActionTypes.ANALYTIC_ACCOUNT_FETCH_ERROR :
      return {
        ...state,
        loading: false,
        analyticAccounts: [],
        error: payload
      };
    //#endregion
   
    //#region ANALYTIC_DATA_FETCH
   case ActionTypes.ANALYTIC_DATA_FETCH_START :
    return {
      ...state,
      loading: true,
      records: [],
      error: ""
    };
  case ActionTypes.ANALYTIC_DATA_FETCH_SUCCESS:
    return {
      ...state,
      loading: false,
      records: payload,
      error: ""
    };
  case ActionTypes.ANALYTIC_DATA_FETCH_ERROR :
    return {
      ...state,
      loading: false,
      records: [],
      error: payload
    };
  //#endregion

    default:
      return state;
  }
};
