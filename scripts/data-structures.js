class LinkedList {
  constructor() {
    this.head = null; // First element in list
    this.tail = null; // Last element in list
  }

  // Append - adds element to end of array.
  append(val) {
    const newNode = { value: val, next: null };

    // If we have a tail, update it. Otherwise just set it (below)
    // Update the next value of PREVIOUS tail points to this new node
    if (this.tail) this.tail.next = newNode;

    // This does not replace the old node in memory... it's still there
    // It just reassigns the tail to point to this new node. 
    this.tail = newNode;

    // If there is no head currently, set it to newNode. Only happens for 
    // first element
    if (!this.head) this.head = newNode;
  }

  // Prepend - adds item to beginning of list.
  prepend(val) {
    const newNode = { value: val, next: null };

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }

    if (!this.tail) this.tail = newNode;
  }

  // DeleteNode - deletes all occurences of value
  deleteNode(val) {
    if (!this.head) return; // List is empty

    let currNode = this.head;

    // While the head node exists and matches the val to be deleted, remove node from
    // list by updating this.head to be the next node.
    while(this.head && this.head.value === val) {
      this.head = this.head.next;
    }

    while (currNode.next) {
      if (currNode.next.value === val) {
        // Update the currNode's next to the node we are deleting's next value.
        // This will result in the match not being referenced by anything and garbage
        // collection will take it away.
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next; //Move onto the next one.
      }

      // If the tail is a match, update this.tail
      if (this.tail.value === val) this.tail = currNode;
      
    }
  }

  // Print out all items in Array
  toArray() {
    const elements = [];
    let currNode = this.head;

    while (currNode) {
      elements.push(currNode);
      currNode = currNode.next;
    }

    return elements;
  }
}

const linkedList1 = new LinkedList();
linkedList1.append('Blah blah blah');
linkedList1.append(true);
linkedList1.append(123);
linkedList1.append(false);
linkedList1.prepend('TESTING should be first item');
console.log(linkedList1.toArray());

linkedList1.deleteNode(false);
linkedList1.deleteNode(123);

console.log(linkedList1.toArray());