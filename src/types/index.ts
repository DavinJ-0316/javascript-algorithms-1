/* eslint-disable @typescript-eslint/no-explicit-any */
export type BaseCallback<T> = (value: T) => string;
export type IComparator<T> = (a: T, b: T) => number;

export interface CallbackArgs<T> {
  value?: T;
  callback?: any;
}
