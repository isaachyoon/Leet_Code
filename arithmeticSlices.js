var numberOfArithmeticSlices = function(A) {
	let difference = null;
	let count = 0;
	let memo = new Array(A.length);
	memo.fill(0);
	let numWays = 0;
	for (let i = 1; i < A.length; i++) {
		if (difference === A[i] - A[i-1]) {
			count++;
			if (count >= 3) {
				if (count === 3) {
					memo[i] = 1;
				} else {
					memo[i] += memo[i-1] + count - 2;
 				}
			} 
		} else {
			difference = A[i] - A[i-1];
			count = 2;
			numWays += memo[i-1];
		}
	}
	console.log(memo)
	numWays += memo[A.length - 1];
	console.log(numWays)
	return numWays;
}

numberOfArithmeticSlices([1, 3, 4, 6, 8, 10 ,12, 10, 14, 15, 16,])