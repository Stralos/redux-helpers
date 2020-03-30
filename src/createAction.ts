export interface ActionCreator<T> {
  type: string;
  (payload?: T): Action<T>;
}

export interface Action<T> {
  type: string;
  payload: T;
}

export const createAction = <Payload>(type: string): ActionCreator<Payload> => {
  const action = (payload?: Payload): Action<Payload> => {
    return {
      type,
      payload
    };
  };
  action.type = type;
  return action;
};
