import { BaseCallback, CallbackArgs, IComparator } from '../../types';
import { IDoublyLinkedList, IDoublyLinkedListNode } from '../../types/doubly-linked-list';
import DoublyLinkedListNode from './DoublyLinkedListNode';
import { comparator as utilsComparator } from '../../utils';

export default class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private head: IDoublyLinkedListNode<T> | null = null;
  private tail: IDoublyLinkedListNode<T> | null = null;
  private readonly comparator: IComparator<T>;

  constructor(comparator: IComparator<T> = utilsComparator) {
    this.comparator = comparator;
  }

  public peek(): T | null {
    return this.head ? this.head.value : null;
  }

  public prepend(value: T): void {
    const newNode = new DoublyLinkedListNode(value, this.head);
    if (this.head) this.head.previous = newNode;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  public append(value: T): void {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    (this.tail as IDoublyLinkedListNode<T>).next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
  }

  public delete(value: T): void {
    if (!this.head) return;
    let deletedNode = null;
    let currentNode: IDoublyLinkedListNode<T> | null = this.head;

    while (currentNode) {
      if (this.comparator(currentNode.value, value) === 0) {
        deletedNode = currentNode;
        if (deletedNode === this.head) {
          this.head = deletedNode.next;
          if (this.head) {
            this.head.previous = null;
          }
          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.previous;
          (this.tail as IDoublyLinkedListNode<T>).next = null;
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;
          (previousNode as IDoublyLinkedListNode<T>).next = nextNode;
          (nextNode as IDoublyLinkedListNode<T>).previous = previousNode;
        }
      }
      currentNode = currentNode.next;
    }
  }

  public find(args: CallbackArgs<T>): IDoublyLinkedListNode<T> | null {
    if (!this.head) return null;
    let currentNode: IDoublyLinkedListNode<T> | null = this.head;
    while (currentNode) {
      if (args.callback && args.callback(currentNode.value)) {
        return currentNode;
      }
      if (args.value && this.comparator(currentNode.value, args.value) === 0) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  public deleteTail(): IDoublyLinkedListNode<T> | null {
    if (!this.tail) return null;
    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;
      return deletedTail;
    }
    const deletedTail = this.tail;
    this.tail = this.tail.previous;
    (this.tail as IDoublyLinkedListNode<T>).next = null;
    return deletedTail;
  }

  public deleteHead(): IDoublyLinkedListNode<T> | null {
    if (!this.head) return null;
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  public forEach(callback: BaseCallback<T>): void {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }

  public toArray(): Array<IDoublyLinkedListNode<T>> {
    const nodes = [];
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

  public toString(callback?: BaseCallback<T>) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }
}
