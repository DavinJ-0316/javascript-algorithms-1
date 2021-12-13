import { ILinkedListFindArgument, LinkedListCallback, LinkedListFindCallback } from './linked-list';

export interface IDoublyLinkedListNode<T> {
  value: T;
  next: IDoublyLinkedListNode<T> | null;
  previous: IDoublyLinkedListNode<T> | null;
  toString: (callback?: LinkedListCallback<T>) => string;
}

export interface IDoublyLinkedList<T> {
  peek: () => T | null;
  prepend: (value: T) => void;
  append: (value: T) => void;
  delete: (value: T) => void;
  deleteHead: () => IDoublyLinkedListNode<T> | null;
  deleteTail: () => IDoublyLinkedListNode<T> | null;
  find: (args: ILinkedListFindArgument<T>) => IDoublyLinkedListNode<T> | null;
  forEach: (callback: LinkedListFindCallback<T>) => void;
  toArray: () => Array<IDoublyLinkedListNode<T>>;
  isEmpty: () => boolean;
  toString: (callback?: LinkedListCallback<T>) => string;
}
