let head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function detectLoop(h)
{
    while (h != null)
    {
          
        if (h.flag == 1)
            return true;
        h.flag = 1;
        h = h.next;
    }
    return false;
}

head = new Node(76);
head.next = new Node(12);
head.next.next = new Node(40);
head.next.next.next = new Node(22);

head.next.next.next.next = head;

module.exports = {detectLoop, head}
