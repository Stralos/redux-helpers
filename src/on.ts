import { createAction } from "./createAction";

export interface On<State> {
  actions: string[];
  reducer: (state: State, payload: any) => void;
}

export const on = <State, T extends ReturnType<typeof createAction>>(
  actionCreator: T | T[],
  reducer: (state: State, payload: ReturnType<T>["payload"]) => void
): On<State> => {
  const actions = Array.isArray(actionCreator)
    ? actionCreator.map(({ toString }) => toString())
    : [actionCreator.toString()];
  return {
    actions,
    reducer,
  };
};
