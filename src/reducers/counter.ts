import { Reducer } from 'redux';
import { initialState } from './index';
import { CountState } from '../types';
import { CountAction, CountActionType } from '../actionTypes';

export const countReducer: Reducer<CountState, CountAction> = (
  count = initialState.count,
  action
): CountState => {
  switch (action.type) {
    case CountActionType.increment:
      return {
        value: count.value++,
      };
    case CountActionType.decrement:
      return {
        value: count.value--,
      };
    default:
      return count;
  }
};
