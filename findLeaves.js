var findLeaves = function(root) {
	let res = [];
	findLeavesHelper(root, res);
	console.log(res)
	return res;


}

function findLeavesHelper(root, res) {
	if (!root) {
		return -1;
	}
	let left = findLeavesHelper(root.left, res) + 1;
	let right = findLeavesHelper(root.right, res) + 1;

	let level = Math.max(left, right);
	if (!Array.isArray(res[level])) {
		res[level] = [];
	}
	res[level].push(root.val);
	return level;
}

function node(val) {
	this.val = val;
	this.right = null;
	this.left = null;
}

let node1 = new node(1);
let node2 = new node(2);
let node3 = new node(3);
let node4 = new node(4);
let node5 = new node(5);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

findLeaves(node1);
