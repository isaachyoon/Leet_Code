//LEET 513
var findBottomLeftValue = function(root) {
	let depth = 0;
	let val = null 
	let res = [depth, val]
	findBottomHelper(root, res);
	return res[0];
}

function findBottomHelper(root, res, direction = '', depth = 0) {
	if (!root) return;

	if(!root.left && !root.right && direction === 'L') {
		if(res[0] < depth) {
			res[0] = depth;
			res[1] = root.val;
		}
		return;
	}

	findBottomHelper(root.left, res, 'L', depth + 1);
	findBottomHelper(root.right, res, 'R', depth + 1);
}

function node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

let one = new node(1);
let two = new node(2);
let three = new node(3);

one.left = two;
one.right = three;

let res = findBottomLeftValue(one)
console.log(res);