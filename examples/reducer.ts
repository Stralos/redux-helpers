import { on, createReducer } from "../src";
import {
  addUserAction,
  updateUserAction,
  removeUserAction,
  getUsersSuccessAction,
} from "./actions";

interface State {
  users: { id: number; name: string; age: number }[];
}
const initialState: State = { users: [] };

export const userReducer = createReducer(
  initialState,
  on(getUsersSuccessAction, (state, payload) => {
    state.users = payload.users;
  }),
  on(addUserAction, (state, payload) => {
    state.users.push(payload);
  }),
  on(updateUserAction, (state, payload) => {
    state.users = state.users.map((user) => {
      if (user.id === payload.id) {
        return {
          ...payload,
        };
      }
      return user;
    });
  }),
  on(removeUserAction, (state, payload) => {
    state.users = state.users.filter((user) => user.id !== payload.id);
  })
);
