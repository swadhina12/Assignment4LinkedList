//Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function oddEvenList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let oddPtr = head;
    let evenHead = head.next;
    let evenPtr = evenHead;

    while (evenPtr !== null && evenPtr.next !== null) {
        oddPtr.next = evenPtr.next;
        oddPtr = oddPtr.next;
        evenPtr.next = oddPtr.next;
        evenPtr = evenPtr.next;
    }

    oddPtr.next = evenHead;

    return head;
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
const arr1 = [1, 2, 3, 4, 5];
const head1 = arrayToLinkedList(arr1);

console.log("Original Linked List:");
console.log(linkedListToArray(head1));

const reorderedHead1 = oddEvenList(head1);

console.log("Reordered Linked List:");
console.log(linkedListToArray(reorderedHead1));

// Example 2:
const arr2 = [2, 1, 3, 5, 6, 4, 7];
const head2 = arrayToLinkedList(arr2);

console.log("Original Linked List:");
console.log(linkedListToArray(head2));

const reorderedHead2 = oddEvenList(head2);

console.log("Reordered Linked List:");
console.log(linkedListToArray(reorderedHead2));
