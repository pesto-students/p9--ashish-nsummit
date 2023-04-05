// Exercise 8.2

let head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function lengthLL(node){  
  let currentNode = node
  let len = 0;

  while(currentNode != null){
    len++;
    currentNode = currentNode.next; 
  }
  
  return len
}

function rotateLL(node, rotateAt) {
    let prevNode = null;
    let currentNode = node;
    let len = lengthLL(node)

    if(rotateAt > len) rotateAt = rotateAt % len;

    let i = 1;
  
    while (i < len) {
      prevNode = currentNode
      currentNode = currentNode.next;
      if(i == rotateAt) {
        prevNode.next = null;
        head = currentNode;
      }  
      i++;
    }

    currentNode.next = node
}

function printLL(node) {
    let strg = ""
    while (node != null) {
        strg += node.data+"->"
        node = node.next;
    }

    strg += "NULL"
    return strg
}

head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

// console.log('Before Rotating the LinkedList')
// printLL(head);

rotateLL(head, 2);

// console.log('After Rotating the LinkedList')
// printLL(head);

module.exports = {printLL, head}