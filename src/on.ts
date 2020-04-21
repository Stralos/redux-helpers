import {
  createAction,
  ActionCreatorNoPayload,
  ActionCreatorWithPayload,
} from "./createAction";

export interface On<State, T> {
  actions: T[];
  reducer: (state: State, action: any) => void;
}

export const on = <
  State,
  U,
  T,
  A extends ActionCreatorNoPayload<T> | ActionCreatorWithPayload<T, U>
>(
  actionCreator: A | A[],
  reducer: (state: State, action: ReturnType<A>) => void
): On<State, T> => {
  const actions = Array.isArray(actionCreator)
    ? actionCreator.map(({ toString }) => toString())
    : [actionCreator.toString()];
  return {
    actions,
    reducer,
  };
};
