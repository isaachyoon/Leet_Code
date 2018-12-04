function rightSideView(root, res, ctr = 0) {
	res = res || [];
	if (!root) {
		return;
	}

	if (res[ctr] === undefined) {
		res[ctr] = root.val;
	}

	rightSideView(root.right, res, ctr+1);
	rightSideView(root.left, res, ctr+1);

	return res;
}

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node5 = new TreeNode(5);
let node4 = new TreeNode(4);

node1.left = node2;
node1.right = node3;
node2.right = node5;
node3.right = node4;


let res = rightSideView(node1);
console.log(res)