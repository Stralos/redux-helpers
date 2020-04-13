import { createAction } from "../createAction";

interface User {
  name: string;
  age: number;
}

describe("createAction", () => {
  it("should return correct type and payload", () => {
    const type = "ADD_USER";
    const payload = { name: "James", age: 23 };
    const actionCreator = createAction<User>(type);
    const action = actionCreator(payload);
    expect(action.type).toBe(type);
    expect(action.payload).toBe(payload);
  });

  it("should have a toString method that returns type", () => {
    const type = "ADD_USER";
    const actionCreator = createAction(type);
    expect(actionCreator.toString()).toBe(type);
  });
});
