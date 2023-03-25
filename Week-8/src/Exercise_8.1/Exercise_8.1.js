let head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function reverseLL(node) {
let prevNode = null;
let currentNode = node;
let next = null;
    while (currentNode != null) {
        next = currentNode.next;
        currentNode.next = prevNode;
        prevNode = currentNode;
        currentNode = next;
    }
    node = prevNode;
    return node;
}

function printLL(node) {
    let strg = ""
    while (node != null) {
        strg += node.data+"->"
        node = node.next;
    }

    strg += 'NULL'
    return strg
}

head = new Node(76);
head.next = new Node(12);
head.next.next = new Node(40);
head.next.next.next = new Node(22);

// console.log('Before Reversing the LinkedList')
// printLL(head);

head = reverseLL(head);

// console.log('After Reversing the LinkedList')
// printLL(head);

module.exports = {printLL, head}
