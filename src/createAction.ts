import { Payload } from "./payload";

export interface ActionCreatorBase<T extends string> {
  toString(): T;
}

export interface Action<T extends string> {
  type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export interface ActionCreatorNoPayload<T extends string>
  extends ActionCreatorBase<T> {
  (): Action<T>;
}

export interface ActionCreatorWithPayload<T extends string, P>
  extends ActionCreatorBase<T> {
  (payload: P): ActionWithPayload<T, P>;
}

export type ActionCreator<T extends string, P> =
  | ActionCreatorNoPayload<T>
  | ActionCreatorWithPayload<T, P>;

export function createAction<T extends string>(
  action: T
): ActionCreatorNoPayload<T>;
export function createAction<T extends string, P>(
  action: T,
  payload: Payload<P>
): ActionCreatorWithPayload<T, P>;
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
