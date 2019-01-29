import React from 'react';
import ReactDom from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import countReducer from './ducks/count';

const rootReducer = combineReducers({
  count: countReducer,
});

ReactDom.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
