// DFS
const graphA = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const breadthFirstSearch = (graphA, source) => {
    const stack = [source];

    while (stack.length > 0){
        const current = stack.pop();
        console.log(current);

        for (let neighbours of graphA[current]) {
            stack.push(neighbours);
        }
    }
}

//BFS
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const depthFirstSearch = (graph, source) => {
    const queue = [source];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);

        for (let neighbour of graph[current]) {
            queue.push(neighbour);
        }
    }
}

console.log('DFS: ')
depthFirstSearch(graph, 'a');
console.log('\nBFS: ')
breadthFirstSearch(graph, 'a');