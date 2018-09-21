

var constructMaximumBinaryTree = function(nums) {
	return construct(0, nums.length - 1, nums);
}

function construct(start, end, nums) {
	if (start > end) {
		return null;
	}
	// if (start === end) {
	// 	node.val = nums[start];
	// 	return;
	// }
	let maximum = -1;
	let maxInd = -1;
	for (let i = start; i <= end; i++) {
		if (maximum < nums[i]) {
			maximum = nums[i];
			maxInd = i;
		}
	}

	let node = new TreeNode(maximum);
	node.left =	construct(start, maxInd-1, nums, node.left);
	node.right = construct(maxInd+1, end, nums, node.right);

	return node;
}

function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}



let res = constructMaximumBinaryTree([3, 2, 1, 6, 0, 5 ]);
console.log(res)
/*
[2, 3, 1, 6, 0, 5 ]
*/