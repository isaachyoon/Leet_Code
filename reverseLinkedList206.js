function ListNode(val) {
	this.val = val;
	this.next = null;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function reverseList(head) {
	let prev = null;
	let curr = head;
	let after = head.next;

	while (curr.next !== null) {
		curr.next = prev;
		prev = curr;
		curr = after;
		after = curr.next;
	}
	curr.next = prev;

	return curr;
}

let res = reverseList(node1);
console.log(res)

/*
<--	1<--2 <--3 <-- 4 <-- 5 <-- null
                   p     c    a
*/