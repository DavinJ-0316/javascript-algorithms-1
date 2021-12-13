export interface IQueue<T> {
  isEmpty: () => boolean;
  enqueue: (value: T) => void;
  dequeue: () => T | null;
}
