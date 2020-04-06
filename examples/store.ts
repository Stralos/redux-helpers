import { createStore as createReduxStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { userReducer } from "./reducer";

const getReducers = () => {
  return combineReducers({
    users: userReducer,
  });
};

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createReduxStore(getReducers(), applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga)
  return store;
};
