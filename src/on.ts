import {
  createAction,
  ActionCreatorNoPayload,
  ActionCreatorWithPayload,
} from "./createAction";

export interface On<State> {
  actions: string[];
  reducer: (state: State, action: any) => void;
}

export const on = <
  State,
  U,
  T extends ActionCreatorNoPayload | ActionCreatorWithPayload<U>
>(
  actionCreator: T | T[],
  reducer: (state: State, action: ReturnType<T>) => void
): On<State> => {
  const actions = Array.isArray(actionCreator)
    ? actionCreator.map(({ toString }) => toString())
    : [actionCreator.toString()];
  return {
    actions,
    reducer,
  };
};
