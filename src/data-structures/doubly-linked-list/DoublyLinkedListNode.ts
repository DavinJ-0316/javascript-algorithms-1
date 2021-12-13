import { BaseCallback } from '../../types';
import { IDoublyLinkedListNode } from '../../types/doubly-linked-list';

export default class DoublyLinkedListNode<T> implements IDoublyLinkedListNode<T> {
  public value: T;
  public next: IDoublyLinkedListNode<T> | null;
  public previous: IDoublyLinkedListNode<T> | null;

  constructor(
    value: T,
    next: IDoublyLinkedListNode<T> | null = null,
    previous: IDoublyLinkedListNode<T> | null = null,
  ) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  public toString(callback?: BaseCallback<T>): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
