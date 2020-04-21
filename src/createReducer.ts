import { produce } from 'immer';
import { On } from "./on";
import { ActionWithPayload, Action } from "./createAction";

export const createReducer = <S, T>(initialState: S, ...args: On<S, T>[]) => {
  return <P>(state = initialState, action: ActionWithPayload<T, P> | Action<T>): S => {
    const reducer = args.find(reducer => reducer.actions.includes(action.type));
    if (!reducer) {
      return state;  
    }
    return produce(state, draft => {
      reducer.reducer(draft as S, action)
    })
  };
};
