import { On } from "./on";

export const createReducer = <S>(initialState: S, ...args: On<S>[]) => {
  return (state = initialState): S => {
    return state;
  };
};
