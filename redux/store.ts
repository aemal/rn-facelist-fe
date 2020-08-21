import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { usersReducer } from "./reducers/usersReducer";
import { AppActions } from "./types";

const rootReducer = combineReducers({
  users: usersReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [
  thunk as ThunkMiddleware<
    AppState,
    AppActions
  >,
];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
