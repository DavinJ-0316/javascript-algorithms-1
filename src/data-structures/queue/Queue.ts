import { ILinkedList } from '../../types/linked-list';
import { IQueue } from '../../types/queue';
import LinkedList from '../linked-list/LinkedList';

export default class Queue<T> implements IQueue<T> {
  private linkedList: ILinkedList<T> = new LinkedList();

  public isEmpty(): boolean {
    return this.linkedList.isEmpty();
  }

  public enqueue(value: T): void {
    this.linkedList.append(value);
  }

  public dequeue(): T | null {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}
