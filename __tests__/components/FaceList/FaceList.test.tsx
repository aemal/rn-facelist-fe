import thunk from "redux-thunk";
import { FaceList } from "../../../components/FaceList";
import renderer from 'react-test-renderer';
import React from 'react';
import fetchMock from 'fetch-mock'
import configureMockStore from "redux-mock-store";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

//mock data
const initialState = {
  users: {
    usersList: [
      { "id": "1", "avatar": "https://i.pravatar.cc/150?img=1", "name": "Morgan James" },
      { "id": "2", "avatar": "https://i.pravatar.cc/150?img=2", "name": "Esme Coleman" },
      { "id": "3", "avatar": "https://i.pravatar.cc/150?img=3", "name": "Gary Watson" },
    ]
  },
};

//mock api for component
const mockSuccessfulResponse = (
  status = 200,
  method = "GET",
  returnBody = initialState.users.usersList
) => {
  fetchMock.get("http://localhost:4000/facelist", () => ({
    method,
    response: {
      status: 200,
      body: JSON.stringify(returnBody)
    }
  }));
};

//store initialization
let store = mockStore(initialState);

//test case for FaceList component
test('FaceList Render Test',async () => {
  await mockSuccessfulResponse()
  const tree = renderer.create(<FaceList store={store} />).toJSON();
  expect(tree).toMatchSnapshot();
});