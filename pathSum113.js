var pathSum = function(root, sum) {
	let res = [];
	pathSumHelper(root, sum, [], res)
	return res;
}

function pathSumHelper(root, sum, temp, res) {
	if (!root) {
		return;
	}
	console.log(root.val, temp)
	if (root.left === null && root.right === null && root.val === sum) {
		temp.push(root.val);
		res.push(temp.slice());
		temp.pop();
	}

	temp.push(root.val);
	pathSumHelper(root.left, sum - root.val, temp, res);
	pathSumHelper(root.right, sum - root.val, temp, res);
	temp.pop();
}

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let node1 = new TreeNode(5);
let node2 = new TreeNode(4);
let node3 = new TreeNode(8);
let node4 = new TreeNode(11);
let node5 = new TreeNode(13);
let node6 = new TreeNode(4);
let node7 = new TreeNode(7);
let node8 = new TreeNode(2);
let node9 = new TreeNode(5);
let node10 = new TreeNode(1);

node1.left = node2;
node2.left = node4;
node4.left = node7;
node4.right = node8;
node1.right = node3;
node3.left = node5;
node3.right = node6;
node6.left = node9;
node6.right = node10;

let res = pathSum(node1, 22);
console.log(res)