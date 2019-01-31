var fib = function(N, memo = {}) {
	if (memo[N]) {
		return memo[N];
	}
	if (N === 0) {
		return 0;
	}

	if (N === 1) {
		return 1;
	}
	const subFib = fib(N-1, memo) + fib(N-2, memo);
	memo[N] = subFib;
	return memo[N];
}

function fibIterative(N) {
	prevPrev = 0;
	prev = 1;

	if (N === 0) return 0;
	if (N === 1) return 1;

	for (let i = 2; i <= N; i++) {

		let temp = prev + prevPrev;
		prevPrev = prev;
		prev = temp;
	}	
	return prev;
}

let res = fib(40);
console.log(res)

let res2 = fibIterative(40);
console.log(res2)
/*
n = 0 => 0 
n = 1 => 1 
n = 2 => 1 
n = 3 => 3 
n = 4 => 4
*/

/*
fib(4) => fib(3) + fib(2)
     fib(2) + fib(1)
   fib(1) + fib(0)

without memoization, the run time is 2^n, n being the N passed in.
heap space is still O(n) because recursive patterns created same number of heap as its recursive calls

with memoization, the run time is O(N) 
the heap space is going to be O(n)
*/

