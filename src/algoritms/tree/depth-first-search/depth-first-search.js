function traverseDFRecursive(node, callback) {
  callback(node);

  if (node.left) {
    traverseDFRecursive(node.left, callback);
  }

  if (node.right) {
    traverseDFRecursive(node.right, callback);
  }
}