import { IComparator } from '../../../types';
import BinaryTreeNode from '../BinaryTreeNode';
import { comparator as utilsComparator } from '../../../utils';

export default class BinarySearchTreeNode<T> extends BinaryTreeNode<T> {
  private readonly comparator: IComparator<T>;

  constructor(value: T | null, comparator = utilsComparator) {
    super(value);
    this.comparator = comparator;
  }

  public insert(value: T): BinarySearchTreeNode<T> | this {
    if (this.comparator(value, this.value as T) < 0) {
      if (this.left) return this.left.insert(value);
      const newNode = new BinarySearchTreeNode(value, this.comparator);
      this.setLeft(newNode);

      return newNode;
    }

    if (this.comparator(value, this.value) > 0) {
      if (this.right) return this.right.insert(value);
      const newNode = new BinarySearchTreeNode(value, this.comparator);
      this.setLeft(newNode);

      return newNode;
    }

    return this;
  }

  find(value) {
    if (this.comparator(this.value, value) === 0) return this;

    if (this.comparator(this.value, value) < 0 && this.left) {
      return this.left.find(value);
    }

    if (this.comparator(this.value, value) > 0 && this.right) {
      return this.right.find(value);
    }

    return null;
  }

  findMin() {
    if (!this.left) return this;
    return this.left.findMin();
  }

  removeChild(nodeToRemove) {
    if (this.left && this.left === nodeToRemove) {
      this.left = null;
      return true;
    }

    if (this.right && this.right === nodeToRemove) {
      this.right = null;
      return true;
    }

    return false;
  }

  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.left === nodeToReplace) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }
}
