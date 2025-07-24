class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// DFS
const maxPathSum = (root) => {
    const stack = [root]
    let totalSum = 0;
    
    if(root ===  null) return 0;
    while (stack.length > 0) {
        const current = stack.pop();
        totalSum += current.val;

        if (current.left !== null) stack.push(current.left);
        if (current.left !== null) stack.push(current.left);
    }
    return totalSum;
}

// BFS
// const maxPathSum = (root) => {
//     if (root === null) return -Infinity;
//     if (root.left === null && root.right === null) return root.val;

//     const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));
//     return root.val + maxChildPathSum;
// }

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

console.log(maxPathSum(a));