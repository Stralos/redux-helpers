import { produce } from 'immer';
import { On } from "./on";
import { Action } from "./createAction";

export const createReducer = <S>(initialState: S, ...args: On<S>[]) => {
  return <T>(state = initialState, action: Action<T>): S => {
    const reducer = args.find(reducer => reducer.actions.includes(action.type));
    if (!reducer) {
      return state;  
    }
    return produce(state, draft => {
      reducer.reducer(draft as S, action.payload)
    })
  };
};
