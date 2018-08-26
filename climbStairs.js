var climbStairs = function(n) {
	return climbStairsHelper(n, {});
}

function climbStairsHelper(n, memo) {
	if (memo[n]) return memo[n];
	if (n === 0) {
		return 1;
	}
	if (n < 0) return 0;
	memo[n] = climbStairsHelper(n-1	, memo) + climbStairsHelper(n-2, memo);
	return memo[n];
}

let res = climbStairs(3);
console.log(res)