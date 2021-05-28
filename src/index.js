import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import manageUsers from './reducers/manageUsers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const initialState = {users: []}
const store = createStore(manageUsers, initialState)

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
