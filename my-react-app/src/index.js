import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import listReducers from './store/reducers/todo';

const reducers = combineReducers({
  todo: listReducers
})

const store = createStore(reducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
  
);
