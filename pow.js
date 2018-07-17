// var myPow = function(x, n) {
// 	if (n === 0) {
// 		return 1;
// 	}
//   if (n < 0) {
//     x = 1 / x;
//     n = n * -1;
//   }
//   let subtotal = x;
//   for (let i = n - 1; i > 0; i--) {
//     subtotal *= x;
//   }
//   return subtotal;
// };

// console.log(myPow(2, 2))

// 2^3 2 * 2* 2

var myPow = function(x, n, memo = {}) {
  if (n < 0) {
    x = 1 / x;
    n = n * -1;
  }
	if (memo[n]) {
		return memo[n];
	}

	if (n === 0) return 1;
	else if (n === 1) return x;

	if (n % 2 === 0) {
		memo[n] = myPow(x, n/2, memo) * myPow(x, n/2, memo);
	} else {
		memo[n] = x * myPow(x, (n-1)/2, memo) * myPow(x, (n-1)/2, memo);
	}
	return memo[n];
}

console.log(myPow(2, -3))
