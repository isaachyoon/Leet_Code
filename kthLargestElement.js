/*
kth largest Element in a stream
if we sort it, it will take nlogn
but if we use heap, it will take log(n) operations, and finding the second largest element will take o(logn)
*/

var KthLargest = function(k, nums) {
  this.arr = [];
  this.k = k;
	for (let i = 0; i < nums.length; i++) {
		this.add(nums[i]);
	}
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
	if (this.arr.length === this.k && val <= this.arr[0]) {
		console.log('return', this.arr, this.arr[0])
		return this.arr[0];
	} else if (this.arr.length === this.k && val > this.arr[0]) {
		this.arr[0] = val;
		this.bubbleDown(0);
	} else {
 		this.arr.push(val);
 		this.bubbleUp(this.arr.length - 1);
	}
	console.log('return', this.arr, this.arr[0])
	return arr[0];
};

KthLargest.prototype.bubbleUp = function(ind) {
	while (ind > 0) {
		let parentInd = Math.floor((ind - 1) / 2);
		if (this.arr[parentInd] > this.arr[ind]) {
			let temp = this.arr[parentInd];
			this.arr[parentInd] = this.arr[ind];
			this.arr[ind] = temp;
		}
		ind = parentInd;
	}
}

KthLargest.prototype.bubbleDown = function(ind) {
	while(true) {
		let child = (ind+1) * 2;
		let sibling = child - 1;
		let toSwap = null;


		if (this.arr[child] && this.arr[ind] > this.arr[child]) {
			toSwap = child;
		}
		if (this.arr[sibling] !== undefined && this.arr[ind] > this.arr[sibling] && (!this.arr[child] || this.arr[sibling] < this.arr[child])) {
			toSwap = sibling;
		}

		if(toSwap === null) break;

		let temp = this.arr[toSwap];
		this.arr[toSwap] = this.arr[ind];
		this.arr[ind] = temp;

		ind = toSwap;
	}
}


let arr = [4,5,8,2];
let kthLargest = new KthLargest(2, [0]);
kthLargest.add(-1);   // returns 4
kthLargest.add(1);   // returns 5
kthLargest.add(-2);  // returns 5
kthLargest.add(-4);   // returns 8
kthLargest.add(3);   // returns 8