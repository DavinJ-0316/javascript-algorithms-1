import Queue from '../../../data-structures/queue/Queue';

export function breadthFirstSearch(root, callback) {
  let nodeQueue = new Queue();
  nodeQueue.enqueue(root);

  while (!nodeQueue.isEmpty()) {
  	let currentNode = nodeQueue.dequeue();
  	callback(currentNode);

  	if (currentNode.left) {
  	  nodeQueue.enqueue(currentNode.left);
  	}

  	if (currentNode.right) {
  	  nodeQueue.enqueue(currentNode.right);
  	}
  }
}
