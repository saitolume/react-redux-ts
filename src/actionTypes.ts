import { Action } from 'redux';

export type AppAction<T extends string, Extra extends {} = {}> = Action<T> &
  { [K in keyof Extra]: Extra[K] };

// counter
export enum CountActionType {
  increment = 'INCREMENT',
  decrement = 'DECREMENT',
}

export type CountAction =
  | AppAction<CountActionType.increment>
  | AppAction<CountActionType.decrement>;
