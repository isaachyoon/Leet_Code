function maxAreaOfIsland(grid) {
	let counter = 0;
	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[0].length; c++) {
			if (grid[r][c] === 1) {
				let ctr = maxAreaOfIslandHelper(grid, r, c);
				counter = Math.max(ctr, counter);
			}
		}
	}	
	return counter;
}

function maxAreaOfIslandHelper(grid, r, c) {
	if (r >= 0 && c >= 0 && r < grid.length && c < grid[0].length) { //up
		if (grid[r][c] === 1) {
			grid[r][c] = 0;
			return 1 + maxAreaOfIslandHelper(grid, r-1, c) + maxAreaOfIslandHelper(grid, r, c-1) + maxAreaOfIslandHelper(grid, r, c+1) + maxAreaOfIslandHelper(grid, r+1, c);
		}
  }
	return 0;
}

let matrix = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]];
let res = maxAreaOfIsland(matrix);
console.log(res)