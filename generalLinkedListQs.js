function Node(val) {
	this.val = val;
	this.next = null;
}

function LinkedList(ll) {
	this.ll = ll;
}

LinkedList.prototype.findMiddle = function() {
	let ptr1 = this.ll;
	let ptr2 = this.ll;

	while(ptr2 && ptr2.next) {
		ptr1 = ptr1.next;
		ptr2 = ptr2.next.next;
	}
	return ptr1;
}

LinkedList.prototype.removeDuplicates = function() {
	let ptr = this.ll;	
	let set = new Set();
	set.add(ptr.val);
	while (ptr.next) {
		if (set.has(ptr.next.val)) {
			ptr.next = ptr.next.next;
		} else {
			set.add(ptr.next.val);
			ptr = ptr.next;
		}
	}
	return this.ll;
}

LinkedList.prototype.reverseLinkedList = function() {
	let prev = null;
	let curr = this.ll;
	let next = this.ll.next;

	while (next) {
		curr.next = prev;
		prev = curr;
		curr = next;
		next = next.next;
	}
	curr.next = prev;
	return curr;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let ll = new LinkedList(node1);
let mid = ll.findMiddle();
console.log(mid);

let removeDuplicates = ll.removeDuplicates();
console.log(removeDuplicates);

let reverseLinkedList = ll.reverseLinkedList();
console.log(reverseLinkedList);
