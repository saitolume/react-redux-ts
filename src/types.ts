import { Action } from 'redux';

export type AppAction<T extends string, Extra extends {} = {}> = Action<T> &
  { [K in keyof Extra]: Extra[K] };

export interface AppState {
  count: CountState;
}

export interface CountState {
  value: number;
}
