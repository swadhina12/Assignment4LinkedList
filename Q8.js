//Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeZeroSumSublists(head) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let sum = 0;
    const sumMap = new Map();
    let curr = dummy;

    while (curr !== null) {
        sum += curr.val;

        if (sumMap.has(sum)) {
            // Remove the consecutive nodes with sum equal to the current sum
            let prev = sumMap.get(sum).next;
            let tempSum = sum + prev.val;

            while (prev !== curr) {
                sumMap.delete(tempSum);
                prev = prev.next;
                tempSum += prev.val;
            }

            sumMap.get(sum).next = curr.next;
        } else {
            sumMap.set(sum, curr);
        }

        curr = curr.next;
    }

    return dummy.next;
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

// Function to convert a linked list to an array for testing
function linkedListToArray(head) {
    const arr = [];
    let curr = head;

    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }

    return arr;
}

// Example usage:

// Example 1:
const arr1 = [1, 2, -3, 3, 1];
const head1 = arrayToLinkedList(arr1);

console.log("Original Linked List:");
console.log(arr1);

const modifiedHead1 = removeZeroSumSublists(head1);

console.log("Modified Linked List:");
console.log(linkedListToArray(modifiedHead1));
