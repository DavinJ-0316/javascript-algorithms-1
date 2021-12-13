import { IHashTable, IHashTableNode, IKeys } from '../../types/hash-table';
import { ILinkedList } from '../../types/linked-list';
import LinkedList from '../linked-list/LinkedList';

const DEFAULT_TABLE_SIZE = 32;

export default class HashTable<T> implements IHashTable<T> {
  private buckets: ILinkedList<IHashTableNode<T>>[];
  private keys: IKeys = {};

  constructor(hashTableSize = DEFAULT_TABLE_SIZE) {
    this.buckets = new Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
  }

  public set(key: string, value: T): void {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue: IHashTableNode<T>) => nodeValue.key === key,
    });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  public delete(key: string): void {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue: IHashTableNode<T>) => nodeValue.key === key,
    });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return undefined;
  }

  public get(key: string): T | null {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue: IHashTableNode<T>) => nodeValue.key === key,
    });

    return node ? node.value.value : null;
  }

  public has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  public getKeys(): string[] {
    return Object.keys(this.keys);
  }

  public getValues(): Array<T> {
    return this.buckets.reduce((values: Array<T>, bucket) => {
      const bucketValues: Array<T> = bucket.toArray()
        .map((linkedListNode) => linkedListNode.value.value);
      return values.concat(bucketValues);
    }, []);
  }

  private hash(key: string): number {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    return hash % this.buckets.length;
  }
}
