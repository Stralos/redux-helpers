import { on } from "../on";
import { createAction } from "../createAction";

describe("on", () => {
  it("should return an object with correct type and a callback", () => {
    const addUserActionCreator = createAction("ADD_USER");
    const callback = jest.fn();
    const result = on(addUserActionCreator, callback);
    expect(result.actions).toMatchObject([addUserActionCreator.toString()]);
    expect(result.reducer).toBe(callback);
  });

  it("should support multiple action creators", () => {
    const addUserActionCreator = createAction("ADD_USER");
    const editUserActionCreator = createAction("EDIT_USER");
    const callback = jest.fn();
    const result = on([addUserActionCreator, editUserActionCreator], callback);
    expect(result.actions).toMatchObject([
      addUserActionCreator.toString(),
      editUserActionCreator.toString(),
    ]);
    expect(result.reducer).toBe(callback);
  });
});
