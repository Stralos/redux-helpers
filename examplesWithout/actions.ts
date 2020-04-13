import { 
  UPDATE_USER,
  REMOVE_USER,
  ADD_USER,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
} from './constants'

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

export const getUsersRequestAction = (payload: GetUsersPayload) => ({
  type: GET_USERS_REQUEST,
  payload
})

export const getUsersSuccessAction = (payload: UsersResponsePayload) => ({
  type: GET_USERS_SUCCESS,
  payload
})

export const getUsersFailAction = (payload: RequestFailure) => ({
  type: GET_USERS_FAIL,
  payload
})

export const addUserAction = (payload: User) => ({
  type: ADD_USER,
  payload
})

export const removeUserAction = (payload: RemoveUser) => ({
  type: REMOVE_USER,
  payload
})

export const updateUserAction = (payload: User) => ({
  type: UPDATE_USER,
  payload
})
