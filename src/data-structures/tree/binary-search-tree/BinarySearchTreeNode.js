import BinaryTreeNode from '../BinaryTreeNode';

class BinarySearchTreeNode extends BinaryTreeNode {
  constructor(value, comparator) {
    super(value);
	this.comparator =  comparator || (a, b) => a - b;
  }

  insert(value) {
  	if (this.comparator(value, this.value) < 0) {
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
     if (!this.left) {
       return this;
     }
 
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

class BinarySearchTree {
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
