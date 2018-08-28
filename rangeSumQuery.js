var NumArray = function(nums) {
	let sum = 0;
	this.newArr = new Array(nums.length);
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		this.newArr[i] = sum;
	}
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  if (i === 0) return this.newArr[j];
  return this.newArr[j] - this.newArr[i-1];
};

let nums = [-2, 0, 3, -5, 2, -1];
var obj = Object.create(NumArray).createNew(nums)
var param_1 = obj.sumRange(i,j)
console.log(param_1);