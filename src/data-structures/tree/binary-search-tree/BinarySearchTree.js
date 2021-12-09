import BinarySearchTreeNode from "./BinarySearchTreeNode";

export default class BinarySearchTree {
  constructor(value, comparator) {
    this.root = new BinarySearchTreeNode(value, comparator);
    this.comparator = comparator;
  }

  insert(value) {
    this.root.insert(value);
  }

  find(value) {
    return this.root.find(value);
  }

  remove(value) {
    const nodeToRemove = this.find(value);

    if (!nodeToRemove) {
      throw new Error('Item not found!');
    }

    const parent = nodeToRemove.parent;

    if (!nodeToRemove.left && !nodeToRemove.right) {
      if (parent) {
        parent.removeChild(nodeToRemove);
      } else {
        nodeToRemove.value = undefined;
      }
    }

    else if (nodeToRemove.left && nodeToRemove.right) {
      const nextBiggerNode = nodeToRemove.right.findMin();
      if (this.comparator(nextBiggerNode, nodeToRemove.right) === 0) {
        nodeToRemove.value = nodeToRemove.right.value;
        nodeToRemove.setRight(nodeToRemove.right.right);
      } else {
        this.remove(nextBiggerNode.value);
        nodeToRemove.value = nextBiggerNode.value;
      }
    }

    else {
      const childNode = nodeToRemove.left || nodeToRemove.right;
      if (parent) {
        parent.replaceChild(nodeToRemove, childNode);
      } else {
        this.root = childNode;
      }
    }

    nodeToRemove.parent = null;
    return true;
  }
}