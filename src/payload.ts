
export interface Payload<T> {
  (payload: T): T
}

export const payload = <T>(): Payload<T> => {
  return (payload: T) => ({ ...payload });
};
