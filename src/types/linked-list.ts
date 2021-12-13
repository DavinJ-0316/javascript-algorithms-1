import { BaseCallback, CallbackArgs } from '../types';

export interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
  toString: (callback?: BaseCallback<T>) => string;
}

export interface ILinkedList<T> {
  peek: () => T | null;
  prepend: (value: T) => void;
  append: (value: T) => void;
  delete: (value: T) => void;
  deleteHead: () => ILinkedListNode<T> | null;
  deleteTail: () => ILinkedListNode<T> | null;
  find: (args: CallbackArgs<T>) => ILinkedListNode<T> | null;
  forEach: (callback: BaseCallback<T>) => void;
  toArray: () => Array<ILinkedListNode<T>>;
  isEmpty: () => boolean;
  toString: (callback?: BaseCallback<T>) => string;
}
