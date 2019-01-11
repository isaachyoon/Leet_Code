var multiply = function(A, B) {
	let resArr = [];
	for (let row = 0; row < A.length; row++) { //1
		let subArr = [];
		console.log('subArr created')
		for (let aCol = 0; aCol < B[0].length; aCol++) { //2
			let sum = 0;
			for (let bCol = 0; bCol < B.length; bCol++) { //2
				sum += A[row][bCol] * B[bCol][aCol];
			}
			subArr.push(sum);
		}
		resArr.push(subArr);
	}
	return resArr;
}

/*
	row = 0;
	aCol = 1;
	bCol = 1;
	A(0,0) * B(0,0)
	A(0,1) * B(1,0)

*/

let A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

let B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]

// let A = [[1,-5]];
// let B = [[12],[-1]];

let res = multiply(A, B);
console.log(res);