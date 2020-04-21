import { Payload } from './payload';

export interface ActionCreatorBase<T> {
  toString(): T;
}

export interface Action<T> {
  type: T;
}

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}

export interface ActionCreatorNoPayload<T> extends ActionCreatorBase<T> {
  (): Action<T>;
}

export interface ActionCreatorWithPayload<T, P> extends ActionCreatorBase<T> {
  (payload: P): ActionWithPayload<T, P>;
}

export function createAction<T>(action: T): ActionCreatorNoPayload<T>;
export function createAction<T, P>(action: T, payload: Payload<P>): ActionCreatorWithPayload<T, P>;
export function createAction<T, P>(type: T) {
  const result = (payload?: P) => {
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
