import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import { createBrowserHistory } from 'history';

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import books from './redux/reducers/books'
import detail from './redux/reducers/detail'
import errors from './redux/reducers/errors'

const rootReducer = combineReducers({
  routing: routerReducer,
  books,
  detail,
  errors,
});

export const history = createBrowserHistory();

const initialState = {};
const middlewares = [
  thunk,
  routerMiddleware(history)
];

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middlewares)
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store