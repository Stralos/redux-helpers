import { createReducer } from "../createReducer";
import { createAction } from "../createAction";
import { on } from "../on";
import { payload } from '../payload';

interface User {
  name: string;
  age: number;
  id: number;
}

interface State {
  isLoading: boolean;
  users: User[];
}

describe("createReducer", () => {
  it("should catch ADD_USER action and update state", () => {
    const initialState: State = { isLoading: false, users: [] };
    const addUserAction = createAction("ADD_USER", payload<User>());
    const callback = jest.fn((state, action) => {
      state.users.push(action.payload);
    });
    const reducer = createReducer(initialState, on(addUserAction, callback));
    const user = {
      name: "James",
      age: 23,
      id: 1,
    };
    const result = reducer(initialState, addUserAction(user));
    expect(result).toMatchObject({ users: [user] });
  });

  it("should return default state if no action is consumed", () => {
    const initialState: State = { isLoading: false, users: [] };
    const addUserAction = createAction("ADD_USER", payload<User>());
    const randomAction = createAction("RANDOM_ACTION");
    const callback = jest.fn((state, action) => {
      state.users.push(action.payload);
    });
    const reducer = createReducer(initialState, on(addUserAction, callback));
    expect(reducer(initialState, randomAction())).toMatchObject(initialState);
  });

  it("should support multiple actions for same callback", () => {
    const initialState: State = { isLoading: false, users: [] };
    const loadingAction = createAction("LOADING_ACTION");
    const editingAction = createAction("EDITING_ACTION");
    const callback = jest.fn((state) => {
      state.isLoading = true;
    });
    const reducer = createReducer(
      initialState,
      on([loadingAction, editingAction], callback)
    );
    expect(reducer(initialState, loadingAction())).toMatchObject({
      isLoading: true,
    });
    expect(reducer(initialState, editingAction())).toMatchObject({
      isLoading: true,
    });
  });
});
