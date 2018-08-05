//optimized solution

var lowestCommonAncestor = function(root, p, q) {
	if (!root) {
		return;
	}

	if (root.val === p.val || root.val === q.val) {
		return root;
	}

	let left = lowestCommonAncestor(root.left, p, q);
	let right = lowestCommonAncestor(root.right, p, q);

	if (left && right) {
		return root;
	}

	return left || right;

}







/////space = n + m

function node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
	this.parent = null;
}

let a = new node('a');
let b = new node('b');
let c = new node('c');
let d = new node('d');
let e = new node('e');
let f = new node('f');
let g = new node('g');
let h = new node('h');

a.left = b;
a.right = c;
b.left = d;
c.left = g;
d.left = e;
d.right = f;
f.left = h;

console.log(lowestCommonAncestor(a, a, b));

/*
var lowestCommonAncestor = function(root, p, q) {
	let arr = findPathToNode(root, p);
	console.log('28', arr[2])
};

function findPathToNode(root, node) {
	if(!root) {
		return;
	}
	if (root.val === node.val) {
		let res = [];
		res.push(node);
		console.log('hi', node)
		return res;
	}

	let nodeFoundArr = findPathToNode(root.left, node) || findPathToNode(root.right, node)
	nodeFoundArr.push(root);
	return nodeFoundArr;
}

lowestCommonAncestor(a, e, g)
*/

