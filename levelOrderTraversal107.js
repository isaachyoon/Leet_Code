function levelOrderTraversal(root) {
	let res = [];
	if (!root) return res;
	levelOrderTraversalHelper(root, 0, res);
	return res.reverse();
}

function levelOrderTraversalHelper(root, level, arr) {
	if (!root) {
		return;
	}

	arr[level] = arr[level] || [];
	arr[level].push(root.val);

	levelOrderTraversalHelper(root.left, level + 1, arr)
	levelOrderTraversalHelper(root.right, level + 1, arr)
}

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let n1 = new TreeNode(3);
let n2 = new TreeNode(9);
let n3 = new TreeNode(20);
let n4 = new TreeNode(15);
let n5 = new TreeNode(7);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;


let res = levelOrderTraversal(n1);
console.log(res)
