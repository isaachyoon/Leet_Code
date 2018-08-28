//276
var numWays = function(n, k) {
	if (k === 1 && n > 3) return 0;
	if (n <= 0 || k <= 0) return 0;
	if (n === 1) {
		return k;
	}
 	let start = 3;
 	let prevPrev = 1;
 	let prev = k;
 	let ways = 0;
 	if (n === 1) return 1 * k;
 	if (n === 2) return k * k;
	while (start <= n) {
		ways = (prev + prevPrev) * (k-1);
		prevPrev = prev
		prev = ways;
		start++;
	}
	return ways * k;
};

let res = numWays(3, 3);
console.log(res)