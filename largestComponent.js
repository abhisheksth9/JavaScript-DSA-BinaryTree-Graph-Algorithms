const largestComponent = (graph) => {
    const visited = new Set();
    let longest = 0;

    for (let node in graph){
        const size = exploreSize(graph, node, visited);
        if (size > longest) longest = size;
    }
    return longest;
}

const exploreSize = (graph, current, visited) => {
    if (visited.has(String(current))) return false;
    visited.add(String(current));

    let size = 1;

    for (let neighbour of graph[current]) {
        size += exploreSize(graph, neighbour, visited);
    }
    return size;
}

console.log(largestComponent({
    0: [8,1,5],
    1: [0],
    5: [0,8],
    8: [0,5],
    2: [3,4],
    3: [2,4],
    4: [3,2]
}));