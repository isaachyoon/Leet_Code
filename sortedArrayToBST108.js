function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
	return arrayToBST(nums, 0, nums.length - 1)
}


function arrayToBST(nums, start, end) {
	if (start > end) {
		return null;
	}
	let mid = Math.floor((start + end) / 2);
	let tree = new TreeNode(nums[mid]);
	tree.left = arrayToBST(nums, start, mid - 1)
	tree.right = arrayToBST(nums, mid + 1, end) 
	return tree;
}

let res = sortedArrayToBST([-10,-3,0,5,9]);
console.log(res)