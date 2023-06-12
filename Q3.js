//Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.bottom = null;
    }
}

function mergeLists(a, b) {
    // If any of the lists is null, return the other list
    if (a === null) {
        return b;
    }
    if (b === null) {
        return a;
    }

    let result;

    // Take the smaller node as the result
    if (a.data <= b.data) {
        result = a;
        result.bottom = mergeLists(a.bottom, b);
    } else {
        result = b;
        result.bottom = mergeLists(a, b.bottom);
    }

    return result;
}

function flatten(head) {
    // Base case: if head is null or there is no next node
    if (head === null || head.next === null) {
        return head;
    }

    // Recursively flatten the next node
    head.next = flatten(head.next);

    // Merge the flattened next node with the current head
    head = mergeLists(head, head.next);

    return head;
}

// Function to print the flattened list
function printFlattenedList(head) {
    let curr = head;
    let result = "";

    while (curr !== null) {
        result += curr.data + "-> ";
        curr = curr.bottom;
    }

    result += "null";
    console.log(result);
}

// Example usage:

// Example 1:
const head1 = new Node(5);
head1.next = new Node(10);
head1.next.next = new Node(19);
head1.next.next.next = new Node(28);

head1.bottom = new Node(7);
head1.bottom.bottom = new Node(8);
head1.bottom.bottom.bottom = new Node(30);

head1.next.bottom = new Node(20);

head1.next.next.bottom = new Node(22);

head1.next.next.next.bottom = new Node(35);
head1.next.next.next.bottom.bottom = new Node(50);

head1.next.next.next.next = null;

console.log("Before:");
printFlattenedList(head1);
const flattenedHead1 = flatten(head1);
console.log("After:");
printFlattenedList(flattenedHead1);

// Example 2:
const head2 = new Node(1);
head2.bottom = new Node(3);
head2.bottom.bottom = new Node(4);

head2.next = new Node(2);
head2.next.bottom = new Node(5);
head2.next.bottom.bottom = new Node(6);

head2.next.next = null;

console.log("Before:");
printFlattenedList(head2);
const flattenedHead2 = flatten(head2);
console.log("After:");
printFlattenedList(flattenedHead2);
