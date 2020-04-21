import { on, createReducer, is } from "../src";
import {
  addUserAction,
  updateUserAction,
  removeUserAction,
  getUsersSuccessAction,
  filterUsersByAgeAction,
  filterUsersByName,
} from "./actions";

interface State {
  filtered: boolean;
  users: { id: number; name: string; age: number }[];
}
const initialState: State = { filtered: false, users: [] };

export const userReducer = createReducer(
  initialState,
  on([filterUsersByAgeAction, filterUsersByName], (state, action) => {
    is(action, filterUsersByAgeAction, ({ payload }) => {
      state.users = state.users.filter((user) => user.age === payload.age);
    });
    if (is(action, filterUsersByName)) {
      state.users = state.users.filter(
        (user) => user.name === action.payload.name
      );
    }
    state.filtered = true;
  }),
  on(getUsersSuccessAction, (state, { payload }) => {
    state.users = payload.users;
  }),
  on(addUserAction, (state, { payload }) => {
    state.users.push(payload);
  }),
  on(updateUserAction, (state, { payload }) => {
    state.users = state.users.map((user) => {
      if (user.id === payload.id) {
        return {
          ...payload,
        };
      }
      return user;
    });
  }),
  on(removeUserAction, (state, { payload }) => {
    state.users = state.users.filter((user) => user.id !== payload.id);
  })
);
