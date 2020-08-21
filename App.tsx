import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import { FaceList } from './components/FaceList/';

export default function App() {
  return (
    <Provider store={store}>
        <FaceList />
    </Provider>
  );
}
