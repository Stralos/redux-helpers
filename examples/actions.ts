import { createAction, payload } from "../src";

interface RequestFailure {
  ex: string;
}

interface GetUsersPayload {
  from: string;
  to: string;
}

interface UsersResponsePayload {
  users: User[];
}

interface User {
  name: string;
  age: number;
  id: number;
}
interface RemoveUser {
  id: number;
}

export const getUsersRequestAction = createAction(
  "GET_USERS_REQUEST",
  payload<GetUsersPayload>()
);
export const getUsersSuccessAction = createAction(
  "GET_USERS_SUCCESS",
  payload<UsersResponsePayload>()
);
export const getUsersFailAction = createAction(
  "GET_USERS_FAIL",
  payload<RequestFailure>()
);
export const addUserAction = createAction("ADD_USER", payload<User>());
export const removeUserAction = createAction(
  "REMOVE_USER",
  payload<RemoveUser>()
);
export const updateUserAction = createAction("UPDATE_USER", payload<User>());
export const noPayloadAction = createAction("SOMETHING");
