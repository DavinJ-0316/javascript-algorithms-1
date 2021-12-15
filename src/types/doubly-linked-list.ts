import { BaseCallback, CallbackArgs } from '../types';

export interface IDoublyLinkedListNode<T> {
  value: T;
  next: IDoublyLinkedListNode<T> | null;
  previous: IDoublyLinkedListNode<T> | null;
  toString: (callback?: BaseCallback<T>) => string;
}

export interface IDoublyLinkedList<T> {
  peek: () => T | null;
  prepend: (value: T) => void;
  append: (value: T) => void;
  delete: (value: T) => void;
  deleteHead: () => IDoublyLinkedListNode<T> | null;
  deleteTail: () => IDoublyLinkedListNode<T> | null;
  find: (args: CallbackArgs<T>) => IDoublyLinkedListNode<T> | null;
  forEach: (callback: BaseCallback<T>) => void;
  toArray: () => Array<IDoublyLinkedListNode<T>>;
  isEmpty: () => boolean;
  toString: (callback?: BaseCallback<T>) => string;
}
