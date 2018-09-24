var pruneTree = function(root) {
	if (!root) {
		return null;
	}

	root.left = pruneTree(root.left);
	root.right = pruneTree(root.right)

	if (root.left === null && root.right === null && root.val === 0) {
		return null;
	}

	return root;
}

function node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

let node1 = new node(1);
// let node2 = new node(0);
let node3 = new node(0);
let node4 = new node(0);
let node5 = new node(0);
let node6 = new node(0);
let node7 = new node(1);

// node1.left = node2;   v
node1.right = node3;
// node2.left = node4;
// node2.right = node5;
node3.left = node6;
node3.right = node7;


let res = pruneTree(node1);
console.log('res', res)