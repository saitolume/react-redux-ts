import { Reducer } from 'redux';
import { AppAction, CountState } from '../types';

// initial state
const initialState: CountState = {
  value: 0,
};

// action
enum ActionType {
  INCREMENT = 'react-redux-ts/count/INCREMENT',
  DECREMENT = 'react-redux-ts/count/DECREMENT',
  SET_COUNT = 'react-redux-ts/count/SET_COUNT',
}

export type CountAction =
  | AppAction<ActionType.INCREMENT>
  | AppAction<ActionType.DECREMENT>
  | AppAction<ActionType.SET_COUNT, { payload: number }>;

// reducer
const countReducer: Reducer<CountState, CountAction> = (
  state = initialState,
  action
): CountState => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        value: state.value + 1,
      };
    case ActionType.DECREMENT:
      return {
        value: state.value - 1,
      };
    case ActionType.SET_COUNT:
      return {
        value: state.value = action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;

// action creator
export const increment = (): CountAction => ({
  type: ActionType.INCREMENT,
});

export const decrement = (): CountAction => ({
  type: ActionType.DECREMENT,
});

export const setCount = (payload: number): CountAction => ({
  type: ActionType.SET_COUNT,
  payload,
});
