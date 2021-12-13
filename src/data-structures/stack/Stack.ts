import { IStack } from '../../types/stack';
import { ILinkedList } from '../../types/linked-list';
import LinkedList from '../linked-list/LinkedList';

export default class Stack<T> implements IStack<T> {
  private linkedList: ILinkedList<T> = new LinkedList();

  public isEmpty(): boolean {
    return this.linkedList.isEmpty();
  }

  public peek(): T | null {
    return this.linkedList.peek();
  }

  public push(value: T): void {
    this.linkedList.prepend(value);
  }

  public pop(): T | null {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}
