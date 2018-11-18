import {
  combineReducers,
  createStore,
  applyMiddleware,
} from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import dataReducer from './dataList';

const rootReducer = combineReducers({
  cryptoState: dataReducer,
});

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(thunk, logger),
);

export default store;
