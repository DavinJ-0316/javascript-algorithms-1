export interface IStack<T> {
  peek: () => T | null;
  push: (value: T) => void;
  pop: (value: T) => void;
  isEmpty: () => boolean;
}
