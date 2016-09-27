import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import configureStore from './store/configureStore';
import ActorHandler from './actors/index';
import routes from './routes';
import App from './components/app';

const USE_REDUX_PROMISE = true;
let _store;

if(USE_REDUX_PROMISE) {
  _store = applyMiddleware(ReduxPromise)(createStore)(reducers, window.devToolsExtension && window.devToolsExtension());
} else {
  _store = configureStore();
}

ActorHandler(_store);

export const store = _store;

ReactDOM.render(
    <Provider store={_store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.querySelector('.container')
);
