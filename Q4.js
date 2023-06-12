//You are given a special linked list with **N** nodes where each node has a next pointer pointing to its next node. You are also given **M** random pointers, where you will be given **M** number of pairs denoting two nodes **a** and **b**  **i.e. a->arb = b** (arb is pointer to random node)**.**

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.random = null;
    }
}

function cloneLinkedList(head) {
    if (head === null) {
        return null;
    }

    // Step 1: Create a copy of each node and insert it after the original node
    let curr = head;
    while (curr !== null) {
        const copyNode = new Node(curr.data);
        copyNode.next = curr.next;
        curr.next = copyNode;
        curr = copyNode.next;
    }

    // Step 2: Update the random pointers of the copy nodes
    curr = head;
    while (curr !== null) {
        if (curr.random !== null) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    // Step 3: Separate the original and copy linked lists
    const dummy = new Node(0); // Dummy node to track the head of the copy list
    let copyCurr = dummy;
    curr = head;

    while (curr !== null) {
        copyCurr.next = curr.next;
        curr.next = curr.next.next;
        curr = curr.next;
        copyCurr = copyCurr.next;
    }

    // Step 4: Return the head of the copy linked list
    return dummy.next;
}

// Function to print the linked list with random pointers
function printLinkedList(head) {
    let curr = head;
    let result = "";

    while (curr !== null) {
        let randomData = curr.random ? curr.random.data : "null";
        result += curr.data + "->(" + randomData + ") ";
        curr = curr.next;
    }

    result += "null";
    console.log(result);
}

// Example usage:

// Example 1:
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);

head1.random = head1.next;
head1.next.random = head1.next.next.next;

console.log("Original Linked List:");
printLinkedList(head1);

const copiedHead1 = cloneLinkedList(head1);

console.log("Copied Linked List:");
printLinkedList(copiedHead1);

// Example 2:
const head2 = new Node(5);
head2.next = new Node(6);
head2.random = head2.next;

console.log("Original Linked List:");
printLinkedList(head2);

const copiedHead2 = cloneLinkedList(head2);

console.log("Copied Linked List:");
printLinkedList(copiedHead2);
