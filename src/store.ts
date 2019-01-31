import { combineReducers, createStore } from 'redux';
import countReducer from './modules/count';

const rootReducer = combineReducers({
  count: countReducer,
});

export const store = createStore(rootReducer);
