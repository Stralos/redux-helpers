import {
  UPDATE_USER,
  REMOVE_USER,
  ADD_USER,
  GET_USERS_SUCCESS,
} from "./constants";

interface State {
  users: { id: number; name: string; age: number }[];
}

const initialState: State = { users: [] };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case UPDATE_USER:
      return {
        ...state,
        users: [...state.users].map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...action.payload,
            };
          }
          return user;
        }),
      };
    case REMOVE_USER: {
      return {
        ...state,
        users: [...state.users].filter((user) => user.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
