
// RECURSIVE IMPLEMENTATION
var zigzagLevelOrder = function(root) {
	let res = [];
	zigzagHelper(root, res, 0);			
	return res;
}

function zigzagHelper(root, arr, level) {
	if (!root) {
		return;
	}
	arr[level] = (!Array.isArray(arr[level])) ? [] : arr[level];
	if (level % 2 === 0) {
		arr[level].push(root.val);
	} else {
		arr[level].unshift(root.val)
	}
	zigzagHelper(root.left, arr, level + 1);
	zigzagHelper(root.right, arr, level + 1);
}



let TreeNode = function(val) {
	this.val = val;
	this.left = this.right = null;
}

let node1 = new TreeNode(3);
let node2 = new TreeNode(9);
let node3 = new TreeNode(20);
let node4 = new TreeNode(15);
let node5 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
node3.left = node4;
node3.right = node5;

let res = zigzagLevelOrder(node1);
console.log(res)



