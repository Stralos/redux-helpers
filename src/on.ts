import {
  Action,
  ActionWithPayload,
  ActionCreator,
} from "./createAction";

export interface On<State, T extends string, P> {
  actions: T[];
  reducer: (state: State, action: Action<T> | ActionWithPayload<T, P>) => void;
}

export const on = <
  State,
  Payload,
  Type extends string,
  ActionC extends ActionCreator<Type, Payload>
>(
  actionCreator: ActionC | ActionC[],
  reducer: On<State, Type, Payload>["reducer"]
): On<State, Type, Payload> => {
  const actions = Array.isArray(actionCreator)
    ? actionCreator.map(({ toString }) => toString())
    : [actionCreator.toString()];
  return {
    actions,
    reducer: reducer,
  };
};
