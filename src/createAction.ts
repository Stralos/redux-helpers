export interface ActionCreatorBase {
  toString(): string;
}

export interface Action {
  type: string;
}

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface ActionCreatorNoPayload extends ActionCreatorBase {
  (): Action;
}

export interface ActionCreatorWithPayload<T> extends ActionCreatorBase {
  (payload: T): ActionWithPayload<T>;
}

export function createAction(action: string): ActionCreatorNoPayload;
export function createAction<T>(action: string): ActionCreatorWithPayload<T>;
export function createAction<T>(type: string) {
  const result = (payload: T) => {
    if (payload == null) {
      return {
        type: type,
      };
    }
    return {
      type: type,
      payload: payload,
    };
  };
  result.toString = () => type;
  return result;
}
