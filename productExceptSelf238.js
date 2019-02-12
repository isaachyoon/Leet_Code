var productExceptSelf = function(nums) {
	let subtotal = 1;
	let res = [];
	for (let i = 1; i <= nums.length; i++) {
		res.push(subtotal)
		subtotal *= nums[i-1];
	}
	subtotal = 1;
	for (let i = nums.length - 1; i >=0; i--) {
		res[i] *= subtotal;
		subtotal *= nums[i];
	}
	console.log(res)
}

productExceptSelf([1, 2, 3, 4])

/*
 [1, 1, 1*2, 1*2*3]
*/