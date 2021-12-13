import LinkedListNode from './LinkedListNode';
import {
  ILinkedList,
  ILinkedListNode,
  LinkedListComparator,
  ILinkedListFindArgument,
  LinkedListCallback,
  LinkedListFindCallback,
} from '../../types/linked-list';

export default class LinkedList<T> implements ILinkedList<T> {
  private head: ILinkedListNode<T> | null = null;
  private tail: ILinkedListNode<T> | null = null;
  private readonly comparator: LinkedListComparator<T>;

  constructor(comparator: LinkedListComparator<T>) {
    this.comparator = comparator;
  }

  public peek(): T | null {
    return this.head ? this.head.value : null;
  }

  public prepend(value: T): void {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  public append(value: T): void {
    const newNode = new LinkedListNode(value);
    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
  }

  public delete(value: T): void {
    if (!this.head) return;

    while (this.head && this.comparator(this.head.value, value) === 0) {
      this.head = this.head.next;
    }

    let current = this.head;
    if (current !== null) {
      while (current.next) {
        if (this.comparator(current.next.value, value) === 0) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }

    if (this.tail && this.comparator(this.tail.value, value) === 0) {
      this.tail = current;
    }
  }

  public deleteHead(): ILinkedListNode<T> | null {
    if (!this.head) return null;
    const deleteHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deleteHead;
  }

  public deleteTail(): ILinkedListNode<T> | null {
    const deleteTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deleteTail;
    }

    let current = this.head;
    while (current?.next) {
      if (!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }

    this.tail = current;
    return deleteTail;
  }

  public find(args: ILinkedListFindArgument<T>): ILinkedListNode<T> | null {
    if (!this.head) return null;

    let current: ILinkedListNode<T> | null = this.head;
    while (current) {
      if (args.callback && args.callback(current.value)) {
        return current;
      }
      if (args.value && this.comparator(current.value, args.value) === 0) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  public forEach(callback: LinkedListFindCallback<T>): void {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }

  public toArray(): Array<ILinkedListNode<T>> {
    const nodes: Array<ILinkedListNode<T>> = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  public isEmpty(): boolean {
    return !this.head;
  }

  public toString(callback?: LinkedListCallback<T>): string {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }
}
