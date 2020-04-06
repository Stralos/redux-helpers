import { on, createReducer } from "../src";
import { addUserAction, updateUserAction, removeUserAction } from "./actions";

interface State {
  users: { id: number; name: string; age: number }[];
}

export const userReducer = createReducer<State>(
  { users: [] },
  on(addUserAction, (state, payload) => {
    state.users.push(payload);
    return state;
  }),
  on(updateUserAction, (state, payload) => {
    state.users = state.users.map(user => {
      if (user.id === payload.id) {
        return {
          ...payload
        };
      }
      return user;
    });
    return state;
  }),
  on(removeUserAction, (state, payload) => {
    state.users = state.users.filter(user => user.id !== payload.id);
    return state;
  })
);
