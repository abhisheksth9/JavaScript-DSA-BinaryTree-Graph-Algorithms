class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const treeIncludes = (root, target) => {
//     if (root === null) return false;

//     const queue = [root];
//     while (queue.length > 0){
//         const currentNode = queue.shift();
//         if (currentNode.val === target) return true;

//         if (currentNode.left) queue.push(currentNode.left);
//         if (currentNode.right) queue.push(currentNode.right);
//     }
//     return false
// };

const treeIncludes = (root, target) => {
    if (root === null) return false;
    if (root.val === target) return true;
    return treeIncludes(root.left, target) || treeIncludes(root.right, target);
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

console.log(treeIncludes(a, 'c'));
console.log(treeIncludes(a, 'o'));