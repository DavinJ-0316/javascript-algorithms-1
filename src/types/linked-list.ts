export type LinkedListCallback<T> = (value: T) => string;
export type LinkedListComparator<T> = (a: T, b: T) => number;
export type LinkedListFindCallback<T> = (value: T) => void;

export interface ILinkedListFindArgument<T> {
  value?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback?: any;
}

export interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
  toString: (callback?: LinkedListCallback<T>) => string;
}

export interface ILinkedList<T> {
  peek: () => T | null;
  prepend: (value: T) => void;
  append: (value: T) => void;
  delete: (value: T) => void;
  deleteHead: () => ILinkedListNode<T> | null;
  deleteTail: () => ILinkedListNode<T> | null;
  find: (args: ILinkedListFindArgument<T>) => ILinkedListNode<T> | null;
  forEach: (callback: LinkedListFindCallback<T>) => void;
  toArray: () => Array<ILinkedListNode<T>>;
  isEmpty: () => boolean;
  toString: (callback?: LinkedListCallback<T>) => string;
}
