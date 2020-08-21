import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../store";
import { AppActions } from "../types";

export const fetchUsers = () => {
  return (dispatch: ThunkDispatch<AppState, undefined, AppActions>) => {
    return fetch(`http://localhost:4000/facelist`) // should be moved to .env file
      .then(response => response.json())
      .then(json => {
        dispatch({type: "FETCH_USERS", payload: json})
      })
  }
}
