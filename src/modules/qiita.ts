import { Reducer } from 'redux';
import { AppAction, QiitaState } from '../types';

// initial state
const initialState: QiitaState = {
  id: '',
  name: '',
  description: '',
};

// action
export enum ActionType {
  FETCH_USER = 'react-redux-ts/qiita/FETCH_USER',
  SET_USER = 'react-redux-ts/qiita/SET_USER',
}

export type QiitaAction =
  | AppAction<ActionType.FETCH_USER, { id: string }>
  | AppAction<
      ActionType.SET_USER,
      { id: string; name: string; description: string }
    >;

// reducer
const qiitaReducer: Reducer<QiitaState, QiitaAction> = (
  state = initialState,
  action
): QiitaState => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        id: action.id,
        name: action.name,
        description: action.description,
      };
    default:
      return state;
  }
};
export default qiitaReducer;

// action creator
export const fetchUser = (id: string): QiitaAction => ({
  type: ActionType.FETCH_USER,
  id,
});

export const setUser = (
  id: string,
  name: string,
  description: string
): QiitaAction => ({
  type: ActionType.SET_USER,
  id,
  name,
  description,
});
