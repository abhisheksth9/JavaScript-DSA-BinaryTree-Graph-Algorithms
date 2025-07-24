class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// // DFS
// const treeMinValue = (root) => {
//     const stack = [root];
//     let smallest = Infinity;

//     while (stack.length > 0){
//         const current = stack.pop();

//         if (current.val < smallest) smallest = current.val;

//         if (current.left !== null) stack.push(current.left);
//         if (current.right !== null) stack.push(current.right);
//     }
//     return smallest;
// }

// //BFS
// const treeMinValue = (root) => {
//     let smallest = Infinity;
//     const queue = [root];

//     while (queue.length > 0) {
//         const current = queue.shift();
//         if (current.val < smallest) smallest = current.val;

//         if (current.left !== null) queue.push(current.left);
//         if (current.right !== null) queue.push(current.right);
//     }
//     return smallest;
// }

//recursion
const treeMinValue = (root) =>{
    if (root === null) return Infinity;
    
    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    
    return Math.min(root.val, leftMin, rightMin);
}

const a = new Node(5);
const b = new Node(27);
const c = new Node(13);
const d = new Node(4);
const e = new Node(3);
const f = new Node(9);

a.left = b;     //      a
a.right = c;    //     / \
b.left = d;     //    b   c
b.right = e;    //   / \   \
c.right = f;    //  d   e   f

console.log(treeMinValue(a));