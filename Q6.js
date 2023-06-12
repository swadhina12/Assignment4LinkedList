//Given a singly linked list of size **N**. The task is to **left-shift** the linked list by **k** nodes, where **k** is a given positive integer smaller than or equal to length of the linked list.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function leftShiftLinkedList(head, k) {
    if (head === null || k === 0) {
        return head;
    }

    let length = 0;
    let curr = head;

    while (curr !== null) {
        length++;
        curr = curr.next;
    }

    k %= length;

    if (k === 0) {
        return head;
    }

    curr = head;

    for (let i = 0; i < length - k - 1; i++) {
        curr = curr.next;
    }

    const newHead = curr.next;
    curr.next = null;

    curr = newHead;

    while (curr.next !== null) {
        curr = curr.next;
    }

    curr.next = head;

    return newHead;
}

// Function to convert the linked list to an array for testing
function linkedListToArray(head) {
    const result = [];
    let curr = head;

    while (curr !== null) {
        result.push(curr.val);
        curr = curr.next;
    }

    return result;
}

// Function to create a linked list from an array for testing
function arrayToLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }

    const head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
}

// Example usage:

// Example 1:
const arr1 = [2, 4, 7, 8, 9];
const head1 = arrayToLinkedList(arr1);
const k1 = 3;

console.log("Original Linked List:");
console.log(linkedListToArray(head1));

const shiftedHead1 = leftShiftLinkedList(head1, k1);

console.log("Shifted Linked List:");
console.log(linkedListToArray(shiftedHead1));

// Example 2:
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
const head2 = arrayToLinkedList(arr2);
const k2 = 4;

console.log("Original Linked List:");
console.log(linkedListToArray(head2));

const shiftedHead2 = leftShiftLinkedList(head2, k2);

console.log("Shifted Linked List:");
console.log(linkedListToArray(shiftedHead2));
