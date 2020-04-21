import { createAction } from "../src";

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

export const getUsersRequestAction = createAction<GetUsersPayload>(
  "GET_USERS_REQUEST"
);
export const getUsersSuccessAction = createAction<UsersResponsePayload>(
  "GET_USERS_SUCCESS"
);
export const getUsersFailAction = createAction<RequestFailure>(
  "GET_USERS_FAIL"
);
export const addUserAction = createAction<User>("ADD_USER");
export const removeUserAction = createAction<RemoveUser>("REMOVE_USER");
export const updateUserAction = createAction<User>("UPDATE_USER");
export const noPayloadAction = createAction('SOMETHING')
