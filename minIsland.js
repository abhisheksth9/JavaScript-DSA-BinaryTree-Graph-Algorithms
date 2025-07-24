const minimumIsland = (grid) => {
    const visited = new Set();
    let minimum = Infinity;

    for (let r = 0; r < grid.length; r+=1){
        for (let c = 0; c < grid[0].length; c+=1){
            const size = exploreSize(grid, r, c, visited);
            if ( size > 0 && size < minimum) {
                minimum = size;
            }
        }
    }
    return minimum;
};

const exploreSize = (grid, r, c, visited) => {
    let rowInbounds = r >= 0 && r < grid.length;
    let colInbounds = c >= 0 && c < grid[0].length;
    if (!rowInbounds || !colInbounds) return 0;

    pos = r + ',' + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    if (grid[r][c] === 'W') return 0;

    let size = 1;

    size += exploreSize(grid, r-1, c, visited);
    size += exploreSize(grid, r+1, c, visited);
    size += exploreSize(grid, r, c-1, visited);
    size += exploreSize(grid, r, c+1, visited);

    return size
}

const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
];

console.log(minimumIsland(grid));