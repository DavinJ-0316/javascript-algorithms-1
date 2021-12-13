export interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
}
