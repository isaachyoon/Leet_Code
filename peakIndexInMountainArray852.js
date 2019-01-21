var peakIndexInMountainArray = function(A) {
	let start = 0;
	let end = A.length - 1;

	while (start < end) {
		let mid = Math.floor((start + end) / 2);
		if (A[mid] < A[mid + 1]) {
			start = mid;
		} else if (A[mid] < A[mid - 1]){
			end = mid;
		} else {
			return mid;
		}
	}
	return start;
}

// let arr = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
let arr = [0, 1, 0];
let res = peakIndexInMountainArray(arr);
console.log(res)