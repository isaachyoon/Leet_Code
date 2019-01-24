var isSymmetric = function(root) {
  if (!root) return true;
	return isSymmetricHelper(root.left, root.right)
}

function isSymmetricHelper(left, right) {
	if (!left && !right) {
		return true;
	} else if ((left && !right) || (right && !left)) {
		return false;
	} 

	let val1 = isSymmetricHelper(left.left, right.right);
	let val2 = isSymmetricHelper(left.right, right.left);
	if (!val1 || !val2)  {
		return false;
	}

	if (left.val !== right.val) {
		return false;
	} else {
		return true;
	}
}

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(3);
let node5 = new TreeNode(4);
let node6 = new TreeNode(4);
let node7 = new TreeNode(3);

node1.left = node2;
node1.right = node3;
// node2.left = node4;
// node2.right = node5;
// node3.left = node6;
// node3.right = node6;

let res = isSymmetric(node1);
console.log(res);