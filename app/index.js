require('es6-promise').polyfill();

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Routes from './config/Routes';

let store = createStore(reducers, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)
