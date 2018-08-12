var largestValues = function(root) {
	let res = [];
	largestValuesHelper(root, res, 0);
	return res;
}

function largestValuesHelper(root, res, ind) {
	if (!root) {
		return;
	}
	if(res[ind] === undefined) {
		res[ind] = root.val;
	} else {
		res[ind] = Math.max(res[ind], root.val)
	}
	largestValuesHelper(root.left, res, ind+1)
	largestValuesHelper(root.right, res, ind+1)
}


// var largestValues = function(root) {
// 	let queue = [];
// 	let res = [];
// 	if(!root) return res;
// 	queue.push(root)
// 	while (queue.length > 0) {
// 		let qLen = queue.length;
// 		let largest = Number.NEGATIVE_INFINITY;
// 		for (let i = 0; i < qLen; i++) {
// 			let currNode = queue.shift();
// 			largest = Math.max(largest, currNode.val);
// 			if(currNode.left) {
// 				queue.push(currNode.left);
// 			}
// 			if(currNode.right) {
// 				queue.push(currNode.right);
// 			}
// 		}
// 		res.push(largest);
// 	}
// 	return res;
// }


function node(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

let one = new node('1');
let two = new node('2');
let three = new node('3');
let four = new node('4');
let five = new node('5');
let six = new node('6');

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;

let res = largestValues(one)
console.log(res);


/*
1ig
[3,2]

*/