var numIslands = function(grid) {
  let islandNum = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === '1') {
        islandNum += 1;
        countIsland(grid, row, col)
      }
    }
  }
  return islandNum;
};

function countIsland(grid, row, col) {
  if(row < 0 || col < 0 || row > grid.length - 1 || col > grid[0].length - 1 || grid[row][col] === '0') {
    return;
  }
  console.log(grid)
  grid[row][col] = 0;
  countIsland(grid, row+1, col);
  countIsland(grid, row, col+1);
  countIsland(grid, row-1, col);
  countIsland(grid, row, col-1);
}

// let matrix = [
// ["1","1","1","1","0"],
// ["1","1","0","1","0"],
// ["1","1","0","0","0"],
// ["0","0","0","0","0"]]

// let matrix = [
// ["1","1","0","0","0"],
// ["1","1","0","0","0"],
// ["0","0","1","0","0"],
// ["0","0","0","1","1"]
// ]
let matrix = [
["1","1","1"],
["0","1","0"],
["1","1","1"]
]

console.log(numIslands(matrix))