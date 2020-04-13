export interface ActionCreator<T> {
  (payload?: T): Action<T>;
  toString: () => string;
}

export interface Action<T> {
  type: string;
  payload: T;
}

export const createAction = <T>(type: string): ActionCreator<T> => {
  const action = (payload: T): Action<T> => {
    return {
      type,
      payload,
    };
  };
  action.toString = () => type;
  return action;
};
