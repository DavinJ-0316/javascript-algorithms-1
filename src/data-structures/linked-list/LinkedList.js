import LinkedListNode from './LinkedListNode';

class LinkedList {
  constructor(comparator) {
  	this.#head = null;
  	this.#tail = null;
  	this.comparator = 
  	  comparator || 
  	  function (a, b) {
  	  	if (a < b) return -1;
  	  	if (a > b) return 1;
  	  	return 0;
  	  }
  }

  peek() {
  	return this.#head.value;
  }

  prepend(value) {
  	const newNode = new LinkedNode(value, this.#head);
  	this.#head = newNode;
  	if (!this.#tail) this.#tail = newNode;
  }

  append(value) {
  	const newNode = new LinkedNode(value);
  	if (this.#tail) this.#tail.next = newNode;
  	this.#tail = newNode;
  	if (!this.#head) this.#head = newNode;
  }

  delete(value) {
  	if (!this.#head) return;

  	while (this.#head && this.comparator(this.head.value, value) === 0) {
  	  this.#head = this.#head.next;
  	}
  	
  	let current = this.#head;
  	if (current !== null) {
  	  while (current.next) {
  	  	if (this.comparator(current.next.value, value) === 0) {
  	  	  current.next = current.next.next;
  	  	} else {
  	  	  current = current.next;	
  	  	}
  	  }
  	}

  	if (this.comparator(this.#tail.value, value) === 0) {
  		this.#tail = current;
  	}
  }

  deleteHead() {
  	if (!this.#head) return null;
  	let deleteHead = this.#head;

  	if (this.#head.next) {
  	  this.#head = this.#head.next;
  	} else {
  		this.#head = this.#tail = null;
  	}

  	return deleteHead;
  }

  deleteTail() {
  	const deletetail = this.#tail;
  	if (this.#head === this.#tail) {
  	  this.#head = this.#tail = null;
  	  return deleteTail;
  	}

  	let current = this.#head;
  	while (current.next) {
  	  if (!current.next.next) {
  	  	current.next = null;
  	  } else {
  	  	current = current.next;
  	  }
  	}

  	this.#tail = current;
  	return deleteTail;
  }

  find(value) {
  	if (!this.#head) return null;

  	let current = this.#head;
  	while (current) {
  	  if (this.comparator(current.value, value) === 0) {
  	  	return current;
  	  }
  	  current = current.next;
  	}

  	return null;
  }

  forEach(callback) {
  	let current = this.#head;
  	while (current) {
  	  callback(current.value);
  	  current = current.next;
  	}
  }

  isEmpty() {
  	return !this.#head;
  }
}

export default LinkedList;
