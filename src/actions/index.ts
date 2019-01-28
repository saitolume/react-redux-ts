import { CountAction, CountActionType } from '../actionTypes';

// counter
const increment = (): CountAction => ({ type: CountActionType.increment });
const decrement = (): CountAction => ({ type: CountActionType.decrement });
export const countActions = { increment, decrement };
