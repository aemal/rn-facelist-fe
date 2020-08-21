import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import {usersReducer} from '../../../../redux/reducers/usersReducer'
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

//mock data
const initialState = {
  users: {
    usersList: [
      { "id": "1", "avatar": "https://i.pravatar.cc/150?img=1", "name": "Morgan James" },
      { "id": "2", "avatar": "https://i.pravatar.cc/150?img=2", "name": "Esme Coleman" },
    ]
  },
};

//store initialization
let store = mockStore(initialState);

//clear actions
beforeEach(() => {
  store.clearActions();
});

//test case for userReducer
it('UserReducer Test', () => {
  const action = {type: "FETCH_USERS", payload: initialState.users.usersList};
  expect(usersReducer(undefined,action)).toMatchSnapshot();
});