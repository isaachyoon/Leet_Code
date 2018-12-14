function trap(height) {
	if (height.length === 0) return 0;
	let arr = [];
	let currMax = 0;
	let rainWater = 0;
	for (let wall of height) {
		currMax = Math.max(currMax, wall);
		arr.push(currMax - wall || 0);
	}
	currMax = 0;
	for (let j = height.length - 1; j >= 0; j--) {
		currMax = Math.max(currMax, height[j]);
		rainWater += Math.min(arr[j], currMax - height[j])
	}
	return rainWater;
}
// let arr = [2, 0, 2];
let arr2 = [0,1,0,2,1,0,1,3,2,1,2,1];
let res = trap(arr2);
console.log(res)
