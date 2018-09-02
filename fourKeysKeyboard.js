// var maxA = function(N) {
// 	if (N < 6) {
// 		return N;
// 	}
// 	let maximumA = 0;
//  	for (let aStrokes = 3; aStrokes < N - 3; aStrokes++) {
//  		let tempMax = aStrokes * 2 + aStrokes * (N - (aStrokes + 3));
//  		maximumA = Math.max(tempMax, maximumA);
//  	}
//  	return maximumA;
// } 

var maxA = function(n) {
  let dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = i;
    for (let j = 1; j <= i - 3; j++) {
    	console.log(i, dp[j] + '*' + (i-j-1), dp[j]*(i-j-1), dp);
      dp[i] = Math.max(dp[i], dp[j] * (i - j - 1));
    }
    	
  }
  console.log(dp)
  return dp[n];
}

let res = maxA(11);
console.log(res);