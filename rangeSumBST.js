//938 Range Sum of BST
var rangeSumBST = function(root, L, R) {
	if (!root) return 0;
	let sum = 0;
	if (L <= root.val && root.val <= R) {
		sum = root.val;
	}
	let left = rangeSumBST(root.left, L, R);
	let right = rangeSumBST(root.right, L, R);

	return left + right + sum;
}