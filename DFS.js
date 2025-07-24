// n = no. of nodes
// Time = O(n)
// Space = O(n)

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValue = (root) => {

    if (root === null) return [];

    result = [];
    stack = [root];
    while (stack.length > 0) {
        const currentNode = stack.pop();
        result.push(currentNode.val);

        if (currentNode.right) stack.push(currentNode.right);
        if (currentNode.left) stack.push(currentNode.left);        
    }
    return result;
}


// const depthFirstValue = (root) => {
//     if (root === null) return [];

//     const leftValues = depthFirstValue(root.left);
//     const rightValues = depthFirstValue(root.right);

//     return [root.val, ...leftValues, ...rightValues];   // '...' is used to unpack an array
// }

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

console.log(depthFirstValue(a));
depthFirstValue(a); 

// const hasPath = (graph, src, dst) => {
//     if (src === dst) return true;

//     for (let neighbour of graph[src]){
//         if (hasPath(graph, neighbour, dst))
//             return true;
//     }
//     return false;
// }

const hasPath = (graph, src, dst) => {
    const queue = [src];

    while(queue.length > 0){
        const current = queue.shift();

        if (current === dst) return true;
        
        for (let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
    return false;
}