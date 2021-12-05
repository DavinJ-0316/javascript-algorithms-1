import LinkedListNode from './LinkedListNode';

export default class LinkedList {
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  prepend(value) {
		if (this.isEmpty()) {
			this.#head = this.#tail = new LinkedNode(value);
		} else {
			this.#head = new LinkedNode(value, this.#head);
		}
		this.#length++;

    return this;
  }

  append(value) {
    const node = new LinkedNode(value);
    if (this.isEmpty()) {
			this.#head = this.#tail = node;
		} else {
			this.#tail.next = node;
			this.#tail = node;
		}
		this.#length++;

    return this;
  }

  remove(value) {
    if (this.isEmpty()) return null;

    let deletedNode = null;

		if (this.size() === 1) {
			this.#head = this.#tail = null;
		} else {
			let current = this.#head;
			while(current.next) {
				if (current.next.value === value) {
          deletedNode = current.next;
					current.next = current.next.next;
				} else {
					current = current.next;
				}
			}
		}
    this.#length--;

    return deletedNode;
  }

  find(value) {
		if (this.isEmpty()) return null;

		let current = this.#head;
		while(current) {
			if (current.value === value) {
				return current;
			}
			current = current.next;
		}
		return null;
  }

  deleteTail() {
    if (this.isEmpty()) return;

    const deletedTail = this.#tail;

    if (this.#head === this.#tail) {
      this.#head = this.#tail = null;

      return deletedTail;
    } else {
      let current = this.#head;
			while(current.next !== this.#tail) {
				current = current.next;
			}
			current.next = null;
			this.#tail = current;
    }
    this.#length--;

    return deletedTail;
  }

  deleteHead() {
    if (this.isEmpty()) return null;

    const deletedHead = this.#head;

    if (this.#head.next) {
      this.#head = this.#head.next;
    } else {
      this.#head = this.#tail = null;
    }
    this.#length--;

    return deletedHead;
  }

  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.#head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }

  isEmpty() {
		return this.#length === 0;
	}

	size() {
		return this.#length;
	}
}