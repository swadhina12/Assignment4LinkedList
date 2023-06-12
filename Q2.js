//A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function addOne(head) {
    let carry = 1;
    let curr = head;
    let prev = null;

    // Traverse the linked list in reverse order
    while (curr !== null) {
        // Add the current node value to carry
        carry += curr.value;

        // Update the node value
        curr.value = carry % 10;

        // Update carry for the next node
        carry = Math.floor(carry / 10);

        // Move to the previous node
        prev = curr;
        curr = curr.next;
    }

    // If carry is still 1, create a new head node
    if (carry === 1) {
        const newHead = new Node(1);
        newHead.next = head;
        head = newHead;
    }

    return head;
}

// Function to create a linked list from an array of values
function createLinkedList(arr) {
    let head = null;
    let tail = null;

    for (let i = 0; i < arr.length; i++) {
        const newNode = new Node(arr[i]);

        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = newNode;
        }
    }

    return head;
}

// Function to convert the linked list to a number
function linkedListToNumber(head) {
    let num = 0;
    let multiplier = 1;
    let curr = head;

    while (curr !== null) {
        num += curr.value * multiplier;
        multiplier *= 10;
        curr = curr.next;
    }

    return num;
}

// Example usage:

// Example 1:
const values1 = [4, 5, 6];
const head1 = createLinkedList(values1);
console.log("Linked List:", values1.join(" -> "));
const newHead1 = addOne(head1);
const result1 = linkedListToNumber(newHead1);
console.log("Output:", result1);

// Example 2:
const values2 = [9, 9, 9];
const head2 = createLinkedList(values2);
console.log("Linked List:", values2.join(" -> "));
const newHead2 = addOne(head2);
const result2 = linkedListToNumber(newHead2);
console.log("Output:", result2);
