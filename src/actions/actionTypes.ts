import { Action } from 'redux';

export type AppAction<T extends string, Extra extends {} = {}> = Action<T> &
  { [K in keyof Extra]: Extra[K] };

export type CountAction =
  | AppAction<'INCREMENT'>
  | AppAction<'DECREMENT'>
  | AppAction<'SET_COUNT', { payload: number }>;
