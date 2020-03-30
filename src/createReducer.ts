import { On } from "./on";
import { Action } from "./createAction";

export const createReducer = <S>(initialState: S, ...args: On<S>[]) => {
  return <T>(state = initialState, action: Action<T>): S => {
    const reducer = args.find(reducer => reducer.type.includes(action.type));
    if (reducer) {
      return reducer.reducer(state, action.payload);
    }
    return state;
  };
};
