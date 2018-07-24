/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(matrix) {
  let min = Number.POSITIVE_INFINITY;
  if (matrix.length === 1) return Math.min(...matrix[0]);
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let currCost = matrix[row][col];
      // console.log(col, '=', (col + 1) % 3, (col + 2) % 3)
      currCost += Math.min(matrix[row-1][(col+1) % 3], matrix[row-1][(col+2) % 3 ]);
      matrix[row][col] = currCost;
      console.log(matrix)
      if (row === matrix.length - 1) {
        min = Math.min(min, currCost);
      }
    }
  }
  return min;
};

let costs = [[17,2,17],[16,16,5],[14,3,19]];
console.log(minCost(costs));