import * as Redux from "redux";

export interface IUser {
  id: string;
  avatar: string;
  name: string;
}

export interface IUsers {
  usersList: IUser[];
}

export const Type = {
  FETCH_USERS: "FETCH_USERS",
};

export interface IUsersAction extends Redux.Action {
  type: string;
  err?: { message?: string };
  payload?: any;
}
