// Time : o(e)
// Space: o(n)

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// DFS
// const hasPath = (graph, src, dst) => {
//     if (src === dst) return true;

//     for (let neighbour of graph[src]){
//         if (hasPath(graph, neighbour, dst) === true){
//             return true
//        }
//     }
//     return false;
// }

// BFS
const hasPath = (graph, src, dst) => {
    const queue = [src];

    while(queue.length > 0){
        const current = queue.shift();

        if (current === dst) return true;

        for (let neighbour of graph[current]){
            queue.push(neighbour);
        }
    }
    return false
}

console.log(hasPath(graph, 'a', 'd'));
console.log(hasPath(graph, 'f', 'd'));

