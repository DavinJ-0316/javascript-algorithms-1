import { IBinaryTreeNode } from '../../types/binary-tree-node';

export default class BinaryTreeNode<T> implements IBinaryTreeNode<T> {
  public value: T | null;
  public left: IBinaryTreeNode<T> | null = null;
  public right: IBinaryTreeNode<T> | null = null;
  public parent: IBinaryTreeNode<T> | null = null;

  constructor(value: T | null = null) {
    this.value = value;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get leftHeight() {
    return this.left ? this.left.height + 1 : 0;
  }

  get rightHeight() {
    return this.right ? this.right.height + 1 : 0;
  }

  public setLeft(node: IBinaryTreeNode<T>): void {
    if (this.left) {
      this.left.parent = null;
    }
    if (node) {
      this.left = node;
      this.left.parent = this;
    }
  }

  public setRight(node: IBinaryTreeNode<T>): void {
    if (this.right) {
      this.right.parent = null;
    }
    if (node) {
      this.right = node;
      this.right.parent = this;
    }
  }
}
