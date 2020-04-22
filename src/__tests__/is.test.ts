import { is } from "../is";
import { createAction } from "../createAction";

describe("is", () => {
  it("should return true and call callback when action is made by creator", () => {
    const addUserActionCreator = createAction("ADD_USER");
    const addUserAction = addUserActionCreator();
    const callback = jest.fn();
    expect(is(addUserAction, addUserActionCreator, callback)).toBe(true);
    expect(callback).toHaveBeenLastCalledWith(addUserAction);
  });

  it("should return false and not call callback when action is not made by the same action creator", () => {
    const addUserActionCreator = createAction("ADD_USER");
    const editUserActionCreator = createAction("EDIT_USER");
    const editUserAction = editUserActionCreator();
    const callback = jest.fn();
    expect(is(editUserAction, addUserActionCreator as any, callback)).toBe(
      false
    );
    expect(callback).not.toHaveBeenCalled();
  });
});
