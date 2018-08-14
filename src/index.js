import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
})
// Middleware - function hook into a process executed without stopping this process
const logger = store => {  // returns a function (which return another function)
  return next => {
    return action => {
      console.log('[Midleware] Dispatching', action);
      const result = next(action)
      console.log('[Middleware] next state', store.getState());
      return result
    }
  }
}
const compeseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,
  compeseEnhancer(applyMiddleware(logger))
)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
