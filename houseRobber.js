var rob = function(nums) {
	if (nums.length === 0) return 0;
	else if (nums.length === 1) return nums[0];
	for (let i = 1; i < nums.length; i++) {
		nums[i] = Math.max((nums[i-2] || 0) + nums[i], nums[i-1]);
	}
	return nums[nums.length - 1];
};

console.log(rob([1, 2, 3, 1]))