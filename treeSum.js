class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeSum = (root) => {
    if (root === null) return 0;
    totalSum = 0;
    const queue = [root];

    while (queue.length > 0){
        const currentNode = queue.shift();
        totalSum += currentNode.val;

        if (currentNode.left !== null) queue.push(currentNode.left);
        if (currentNode.left !== null) queue.push(currentNode.left);        
    }

    return totalSum;
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

console.log(treeSum(a));