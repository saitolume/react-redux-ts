import { Reducer } from 'redux';
import { initialState } from './index';
import { CountState } from '../types';
import { CountAction } from '../actions/actionTypes';

export const countReducer: Reducer<CountState, CountAction> = (
  count = initialState.count,
  action
): CountState => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: count.value + 1,
      };
    case 'DECREMENT':
      return {
        value: count.value - 1,
      };
    case 'SET_COUNT':
      return {
        value: count.value = action.payload,
      };
    default:
      return count;
  }
};
