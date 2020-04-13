import { createReducer } from "../createReducer";
import { createAction } from "../createAction";
import { on } from "../on";

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
    const addUserAction = createAction<User>("ADD_USER");
    const callback = jest.fn((state, payload) => {
      state.users.push(payload);
      return state;
    });
    const reducer = createReducer(initialState, on(addUserAction, callback));
    const payload = {
      name: "James",
      age: 23,
      id: 1,
    };
    const result = reducer(initialState, addUserAction(payload));
    expect(result).toMatchObject({ users: [payload] });
  });

  it("should return default state if no action is consumed", () => {
    const initialState: State = { isLoading: false, users: [] };
    const addUserAction = createAction<User>("ADD_USER");
    const randomAction = createAction("RANDOM_ACTION");
    const callback = jest.fn((state, payload) => {
      state.users.push(payload);
      return state;
    });
    const reducer = createReducer(initialState, on(addUserAction, callback));
    expect(reducer(initialState, randomAction())).toMatchObject(initialState);
  });

  it("should support multiple actions for same callback", () => {
    const initialState: State = { isLoading: false, users: [] };
    const loadingAction = createAction<User>("LOADING_ACTION");
    const editingAction = createAction<User>("EDITING_ACTION");
    const callback = jest.fn((state) => {
      state.isLoading = true;
      return state;
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
