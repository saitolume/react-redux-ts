import { combineReducers } from 'redux';
import { AppState } from '../types';
import { countReducer } from './counter';

export const initialState: AppState = {
  count: {
    value: 0,
  },
};

export const rootReducer = combineReducers({
  count: countReducer,
});
