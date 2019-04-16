var hasPathSum = function(root, sum) {
	if (!root) return false;
	if (!root.left && !root.right && sum - root.val === 0) {
		return true;
	}
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}

function node(val) {
	this.val = val;
	this.left = this.right = null;
}

let node5 = new node(1);
let node4 = new node(2);
// let node8 = new node(8);
// let node11 = new node(11);
// let node13 = new node(13);
// let node4two = new node(4);
// let node7 = new node(7);
// let node2 = new node(2);
// let node1 = new node(1);

node5.left = node4;
// node5.right = node8;
// node4.left = node11;
// node11.left = node7;
// node11.right = node2;
// node8.left = node13;
// node8.right = node4;
// node4two.right = node1;


hasPathSum(node5, 1);



