// var numSquares = function(n) {
//   let squaresArr = findSquare(n);
//   return minNumSquares(squaresArr, n, {});
// };

// function findSquare(k) {
//   let res = [];
//   for (let i = 1; i*i <= k; i++) {
//     res.push(i*i);
//   }
//   return res;
// }

// function minNumSquares(arr, k, memo) {
// 	if(memo[k]) return memo[k];
// 	if (k === 0) {
// 		return 0;
// 	}
// 	let min = Number.POSITIVE_INFINITY;
// 	for (let i = arr.length - 1; i >= 0; i--) {
// 		if(k - arr[i] >= 0) {
// 			min = Math.min(minNumSquares(arr, k - arr[i], memo) + 1, min);
// 		}
// 	}
// 	memo[k] = min;
// 	return memo[k];
// }

function numSquares(n) {
  const dp = [0];
  
  for (let i = 1; i <= n; i++) {
    dp[i] = Number.MAX_VALUE;
    for (let j = 1; j*j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i-j*j]+1);
      console.log(dp)
    } 
  }
  
  return dp[n];
}

console.log(numSquares(12));