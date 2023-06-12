//You are given the `head` of a linked list with `n` nodes.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function nextLargerNodes(head) {
    const values = [];
    let curr = head;

    // Store the node values in an array
    while (curr !== null) {
        values.push(curr.val);
        curr = curr.next;
    }

    const stack = [];
    const answer = new Array(values.length).fill(0);

    for (let i = 0; i < values.length; i++) {
        while (stack.length > 0 && values[i] > values[stack[stack.length - 1]]) {
            const index = stack.pop();
            answer[index] = values[i];
        }
        stack.push(i);
    }

    return answer;
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
const arr1 = [2, 1, 5];
const head1 = arrayToLinkedList(arr1);

console.log("Original Linked List:");
console.log(arr1);

const answer1 = nextLargerNodes(head1);

console.log("Next Larger Nodes:");
console.log(answer1);
