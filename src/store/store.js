import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { save, load } from "redux-localstorage-simple";
import authReducer from "./Reducers/authReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
const rootReducer = combineReducers({
  authState: authReducer
});
const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(
  save(),
  sagaMiddleware // Saving done here
)(createStore);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStoreWithMiddleware(
  rootReducer,
  load(),

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(rootSaga);
