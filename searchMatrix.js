var searchMatrix = function(matrix, target) {
  let numberFound = false;
  for (let i = 0; i < matrix.length; i++) {
    let endInd = matrix[0].length-1;
    let min = matrix[i][0];
    let max = matrix[i][endInd];
    if(min <= target && target <= max) {
      numberFound = findTarget(matrix, i, target)      
      if (numberFound) return true;
    } 
  }
  return numberFound;
};

function findTarget(matrix, row, target) {
	console.log('row', row)
  let start = 0;
  let end = matrix[row].length - 1;
  while(start <= end) {
  	console.log(start, end)
    let mid = Math.floor((start + end) / 2);
    if(target < matrix[row][mid]) {
      end = mid - 1;
    } else if (matrix[row][mid] < target) {
      start = mid + 1;
    } else {
      return true;
    }
  }
  return false;
}

// let arr = [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]

let arr = [[-5]]

console.log(searchMatrix(arr, -5));