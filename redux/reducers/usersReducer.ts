import {
  IUsers,
  Type,
  IUsersAction
} from "../types/userTypes";

const initialState: IUsers = { usersList: [] };

export const usersReducer = (
  state = initialState,
  action: IUsersAction
): IUsers => {
  switch (action.type) {
    case Type.FETCH_USERS:
      return {
        ...state,
        usersList: action.payload
      };
    default:
      return {
        ...state,
      }
  }
}
