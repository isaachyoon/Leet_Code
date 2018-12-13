function ListNode(val) {
	this.val = val;
	this.next = null;
}

// version3
function getIntersectionNode(headA, headB) {
	if (!headA || !headB) return null;
	let ptrA = headA;
	let ptrB = headB;
	let ptrALoop = 0;
	let ptrBLoop = 0;
	while (ptrA !== ptrB) {
		console.log(ptrA.val, ptrB.val)
		if (ptrALoop === 2 && ptrBLoop ===2) return null;
		if (ptrA.next) {
			ptrA = ptrA.next;
		} else {
			ptrA = headB
			ptrALoop++;
		}
		if (ptrB.next){
			ptrB = ptrB.next;
		} else {
			ptrB = headA
			ptrBLoop++;
		}
	}
	return ptrA;
}	

//version 2
// function getIntersectionNode(headA, headB) {
// 	let countA = 1;
// 	let countB = 1;
// 	let startA = headA;
// 	let startB = headB;
// 	while (headA.next || headB.next) {
// 		if (headA.next) {
// 			headA = headA.next;
// 			countA++;
// 		}
// 		if (headB.next) {
// 			headB = headB.next;
// 			countB++;
// 		}
// 	}
// 	if (countA > countB) {
// 		let diff = countA - countB;
// 		for (let i = 0; i < diff; i++) {
// 			startA = startA.next;
// 		}
// 	} else if (countB > countA) {
// 		let diff = countB - countA;
// 		for (let i = 0; i < diff; i++) {
// 			startB = startB.next;
// 		}
// 	}
// 	while (startA.next && startB.next && startA !== startB) {
// 		startA = startA.next;
// 		startB = startB.next;
// 	}

// 	if (startA !== startB) return null;
// 	return startA;
// }

//version 1
// function getIntersectionNode(headA, headB) {
// 	let arrA = [];
// 	while (headA) {
// 		arrA.push(headA);
// 		headA = headA.next;
// 	}
// 	let arrB = [];
// 	while (headB) {
// 		arrB.push(headB);
// 		headB = headB.next;
// 	}

// 	let aPtr = arrA.length - 1;
// 	let bPtr = arrB.length - 1;
// 	if (arrA[aPtr] !== arrB[bPtr]) return null;
// 	while (aPtr >= 0 && bPtr >= 0 && arrA[aPtr] === arrB[bPtr]) {
// 		aPtr--;
// 		bPtr--;
// 	}
// 	if (aPtr === 0 && bPtr === 0) {
// 		return arrB[0];
// 	}
// 	return arrB[bPtr + 1];
// }

let a1 = new ListNode('1');
let a2 = new ListNode('3');
let a3 = new ListNode('5');
let c1 = new ListNode('6');
let c2 = new ListNode('7');
let c3 = new ListNode('8');
let c4 = new ListNode('9');
let c5 = new ListNode('10');


let b1 = new ListNode('2');
let b2 = new ListNode('4');
// let b3 = new ListNode('b3');
// let b3 = new ListNode('b3');
// let b3 = new ListNode('b3');


a1.next = a2;
a2.next = a3;
a3.next = c1;
c1.next = c2;
c2.next = c3;
c3.next = c4;
c4.next = c5;

b1.next = b2;
b2.next = c1;

let res = getIntersectionNode(a1, b1);
console.log(res)