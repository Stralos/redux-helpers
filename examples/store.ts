import { createStore as createReduxStore, combineReducers } from "redux";
import { userReducer } from "./reducer";

const getReducers = () => {
  return combineReducers({
    users: userReducer,
  });
};

export const createStore = () => {
  const store = createReduxStore(getReducers());
  return store;
};
