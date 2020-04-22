import { Action, ActionCreator, ActionCreatorNoPayload } from "./createAction";

export const is = <T extends string, P, AC extends ActionCreator<T, P>>(
  action: Action<T>,
  actionCreator: AC,
  callback?: (action: ReturnType<AC>) => void
): action is ReturnType<AC> => {
  const result =  action.type === actionCreator.toString();
  if (result) {
    callback?.(action as ReturnType<AC>)
  }
  return result;
};

