//Given a linked list of **N** nodes such that it may contain a loop.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function detectAndRemoveLoop(head) {
    let slowPtr = head;
    let fastPtr = head;

    // Move slowPtr one step and fastPtr two steps at a time
    while (fastPtr !== null && fastPtr.next !== null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;

        // Loop exists
        if (slowPtr === fastPtr) {
            break;
        }
    }

    // No loop exists
    if (fastPtr === null || fastPtr.next === null) {
        return head;
    }

    // Reset slowPtr to head and move both pointers one step at a time
    slowPtr = head;
    while (slowPtr.next !== fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
    }

    // Remove the loop
    fastPtr.next = null;

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

// Function to print the linked list
function printLinkedList(head) {
    let curr = head;
    let result = "";

    while (curr !== null) {
        result += curr.value + " -> ";
        curr = curr.next;
    }

    result += "null";
    console.log(result);
}

// Example usage:

// Example 1:
const values1 = [1, 3, 4];
const head1 = createLinkedList(values1);
const x1 = 2;
head1.next.next.next = head1.next; // Creating a loop
console.log("Before:");
printLinkedList(head1);
detectAndRemoveLoop(head1);
console.log("After:");
printLinkedList(head1);

// Example 2:
const values2 = [1, 8, 3, 4];
const head2 = createLinkedList(values2);
const x2 = 0;
console.log("Before:");
printLinkedList(head2);
detectAndRemoveLoop(head2);
console.log("After:");
printLinkedList(head2);
