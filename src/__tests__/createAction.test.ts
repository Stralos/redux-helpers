import { createAction } from "../createAction";
import { payload } from '../payload';

interface User {
  name: string;
  age: number;
}

describe("createAction", () => {
  it("should return correct type and payload", () => {
    const type = "ADD_USER";
    const user = { name: "James", age: 23 };
    const actionCreator = createAction(type, payload<User>());
    const action = actionCreator(user);
    expect(action.type).toBe(type);
    expect(action.payload).toBe(user);
  });

  it("should have a toString method that returns type", () => {
    const type = "ADD_USER";
    const actionCreator = createAction(type);
    expect(actionCreator.toString()).toBe(type);
  });
});
