function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
	let carryOver = 0;
	let res;
	let l3 = new ListNode(null);
	res = l3;
	while (l1 ||l2) {
		l1 = l1 || {val: 0};
		l2 = l2 || {val: 0};
		let val = l1.val + l2.val + carryOver;
		if (val >= 10) {
			carryOver = 1;
			val -= 10;
		} else {
			carryOver = 0;
		}
		l3.next = new ListNode(val);
		l3 = l3.next;
		l1 = l1.next;
		l2 = l2.next;		
	}
	if (carryOver) {
		l3.next = new ListNode(carryOver);
	}
	return res.next;
}



let l2 =  new ListNode(5);
// let l4 =  new ListNode(4);
// let l3 =  new ListNode(3);
// let l8 =  new ListNode(8);

let l5 =  new ListNode(5);
// let l6 =  new ListNode(6);
// let l7 =  new ListNode(4);

// l2.next = l4;
// l4.next = l3;
// l3.next = l8;

// l5.next = l6;
// l6.next = l7;

let res = addTwoNumbers(l2, l5)
console.log(res)
/*
	342 465
	^   ^
*/