import { ILinkedListNode, LinkedListCallback } from '../../types/linked-list';

export default class LinkedListNode<T> implements ILinkedListNode<T> {
  public value: T;
  public next: ILinkedListNode<T> | null;

  constructor(value: T, next: ILinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?: LinkedListCallback<T>) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
