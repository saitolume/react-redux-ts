import { CountAction } from './actionTypes';

const increment = (): CountAction => ({ type: 'INCREMENT' });
const decrement = (): CountAction => ({ type: 'DECREMENT' });
const setCount = (payload: number): CountAction => ({
  type: 'SET_COUNT',
  payload,
});

export const countActions = { increment, decrement, setCount };
