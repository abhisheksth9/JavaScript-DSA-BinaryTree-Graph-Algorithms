// n = no. of nodes
// Time Complexity = O(n)
// Space Complexity = O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstSearch = (root) => {
    if (root === null) return [];

    const values = [];
    const queue = [root];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        values.push(currentNode.val);

        if (currentNode.left !== null) queue.push(currentNode.left);
        if (currentNode.right !== null) queue.push(currentNode.right);        
    }
    return values;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;     //      a
a.right = c;    //     / \
b.left = d;     //    b   c
b.right = e;    //   / \   \
c.right = f;    //  d   e   f

console.log(breadthFirstSearch(a));

