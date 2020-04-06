export interface ActionCreator<T> {
  type: string;
  (payload?: T): Action<T>;
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
  action.type = type;
  return action;
};
