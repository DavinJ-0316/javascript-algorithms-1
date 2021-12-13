export interface IKeys {
  [key: string]: number;
}

export interface IHashTableNode<T> {
  key: string;
  value: T;
}

export interface IHashTable<T> {
  set: (key: string, value: T) => void;
  delete: (key: string) => void;
  get: (key: string) => T | null;
  has: (key: string) => boolean;
  getKeys: () => Array<string>;
  getValues: () => Array<T>;
}
