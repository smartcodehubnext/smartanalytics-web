import * as ActionTypes from "../Actions";
const initialState = {
  redirectUrl: "",
  selectedaccount: undefined,
  accounts: [],
  loading: false,
  error: undefined
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //#region ACCOUNT_FETCH
    case ActionTypes.ACCOUNT_FETCH_START:
      return {
        ...state,
        loading: true,
        redirectUrl: "",
        accounts: [],
        error: ""
      };
    case ActionTypes.ACCOUNT_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        redirectUrl: "",
        accounts: [...payload],
        error: ""
      };
    case ActionTypes.ACCOUNT_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        redirectUrl: "",
        accounts: [],
        error: payload
      };
    //#endregion

    //#region ACCOUNT_SELECT
    case ActionTypes.ACCOUNT_SELECT_START:
      return {
        ...state,
        loading: true,
        redirectUrl: "",
        selectedaccount: undefined,
        error: ""
      };
    case ActionTypes.ACCOUNT_SELECT_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedaccount: payload,
        redirectUrl: "",
        error: ""
      };
    case ActionTypes.ACCOUNT_SELECT_ERROR:
      return {
        ...state,
        loading: false,
        redirectUrl: "",
        selectedaccount: undefined,
        error: payload
      };
    //#endregion

    //#region ACCOUNT_SAVE
    case ActionTypes.ACCOUNT_SAVE_START:
      return {
        ...state,
        loading: true,
        redirectUrl: "",
        error: ""
      };
    case ActionTypes.ACCOUNT_SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        redirectUrl: "",
        accounts: [payload, ...state.accounts],
        selectedaccount: payload,
        error: ""
      };
    case ActionTypes.ACCOUNT_SAVE_ERROR:
      return {
        ...state,
        loading: false,
        redirectUrl: "",
        error: payload
      };
    //#endregion

    //#region ACCOUNT_GET_REDIRECT_URL
    case ActionTypes.ACCOUNT_GET_REDIRECT_URL:
      return {
        ...state,
        loading: true,
        redirectUrl: "",
        error: ""
      };
    case ActionTypes.ACCOUNT_GET_REDIRECT_URL_SUCCESS:
      return {
        ...state,
        loading: false,
        redirectUrl: payload,
        error: ""
      };
    case ActionTypes.ACCOUNT_GET_REDIRECT_URL_ERROR:
      return {
        ...state,
        loading: false,
        redirectUrl: "",
        error: payload
      };
    //#endregion

    default:
      return state;
  }
};
