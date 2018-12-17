function binaryTreeHeight(root) {
	if (!root) {
		return 0
	}
	return Math.max(binaryTreeHeight(root.left), binaryTreeHeight(root.right)) + 1;
}