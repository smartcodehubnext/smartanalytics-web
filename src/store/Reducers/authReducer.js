import * as ActionTypes from "../Actions";
const initialState = {
  user: { token: "" },
  loading: false,
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    //#region Auth Register
    case ActionTypes.AUTH_REGISTER_SUCCESS:
      return { ...state, loading: false, error: "", user: { ...payload } };
    case ActionTypes.AUTH_REGISTER_START:
      return { ...state, loading: true };
    case ActionTypes.AUTH_REGISTER_ERROR:
      return { ...state, loading: false, error: payload };
    //#endregion

    //#region Auth Login
    case ActionTypes.AUTH_LOGIN_SUCCESS:
      return { ...state, loading: false, error: "", user: { ...payload } };
    case ActionTypes.AUTH_LOGIN_START:
      return { ...state, loading: true };
    case ActionTypes.AUTH_LOGIN_ERROR:
      return { ...state, loading: false, error: payload };
    //#endregion
    case ActionTypes.AUTH_EMAIL_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        user: { ...state.user, emailConfirmed: true }
      };
    case ActionTypes.AUTH_LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};
