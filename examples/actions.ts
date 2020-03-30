import { createAction } from "../src";

interface User {
  name: string;
  age: number;
  id: number;
}
interface RemoveUser {
  id: number;
}

export const addUserAction = createAction<User>("ADD_USER");
export const removeUserAction = createAction<RemoveUser>("REMOVE_USER");
export const updateUserAction = createAction<User>("UPDATE_USER");
