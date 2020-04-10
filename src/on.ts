import { createAction } from './createAction';

export interface On<State> {
  type: string[];
  reducer: (state: State, payload: any) => State;
}

export const on = <State, T extends ReturnType<typeof createAction>>(
  actionCreator: T | T[],
  reducer: (state: State, payload: ReturnType<T>["payload"]) => State
): On<State> => {
  const type = Array.isArray(actionCreator)
    ? actionCreator.map(a => a.type)
    : [actionCreator.type];

  return {
    type,
    reducer
  };
};
