function treeLevelTraversal(node) {
	let res = [];
	let queue = [];
	queue.push(node);
	while(queue.length > 0) {
		let temp = []
		let qLen = queue.length;
		for (let i = 0; i < qLen; i++) {
			let parent = queue.shift();
			temp.push(parent.val);
			let childrenLen = parent.children.length;
			for (let j = 0; j < parent.children.length; j++) {
				queue.push(parent.children[j]);
			}
		} 
		res.push(temp);
	}
	return res;
}
/*
parent = 3
queue = [2, 4]
res = []
temp = [1]

*/

function node(val) {
	this.val = val;
	this.children = []
}

let a = new node('a');
let b = new node('b');
let c = new node('c');
let d = new node('d');
let e = new node('e');
let f = new node('f');
let g = new node('g');

a.children.push(b);
a.children.push(c);
a.children.push(d);
b.children.push(e);
b.children.push(f);
c.children.push(g);

console.log(treeLevelTraversal(a));