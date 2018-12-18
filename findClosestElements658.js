function findClosestElements(arr, k, x) {
	let start = 0;
	let end = arr.length - 1;

	while (end - start + 1 > k) {
		let leftDistance = Math.abs(arr[start] - x);
		let rightDistance = Math.abs(arr[end] - x);
		if (leftDistance > rightDistance) {
			start++;
		} else {
			end--;
		}
	}
	return arr.slice(start, end+1);
}

let arr = [1, 2, 3, 4, 5]
let res = findClosestElements(arr, 4, -1);
console.log(res)