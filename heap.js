function MinHeap() {
	this.heap = [];
}

MinHeap.prototype.add = function(val) {
	this.heap.push(val);
	this.bubbleUp();
}

MinHeap.prototype.remove = function() {
	this.heap[0] = this.heap[this.heap.length - 1];
	this.heap.pop();
	this.bubbleDown();
}

MinHeap.prototype.bubbleDown = function() {
	let currInd = 0;
	let leftInd = currInd * 2 + 1;
	let rightInd = currInd * 2 + 2;

	while (this.heap[currInd] > this.heap[leftInd] || this.heap[currInd] > this.heap[rightInd]) {
		let goLeft = (this.heap[leftInd] && this.heap[rightInd]) ? this.heap[leftInd] < this.heap[rightInd] : this.heap[leftInd] || this.heap[rightInd];
		if (goLeft) {
			let temp = this.heap[currInd];
			this.heap[currInd] = this.heap[leftInd];
			this.heap[leftInd] = temp;
			currInd = leftInd;
		} else {
			console.log('before', this.heap, currInd, rightInd)
			let temp = this.heap[currInd];
			this.heap[currInd] = this.heap[rightInd];
			this.heap[rightInd] = temp;
			console.log('yo', this.heap, currInd, rightInd)
			currInd = rightInd;
		}
		leftInd = currInd * 2 + 1;
		rightInd = currInd * 2 + 2;
	}
	console.log(this.heap);
}

MinHeap.prototype.bubbleUp = function() {
	let currInd = this.heap.length - 1;
	let parentInd = (currInd % 2 === 0) ? (currInd - 2) / 2 : (currInd - 1) / 2;
	while (parentInd >= 0 && this.heap[parentInd] > this.heap[currInd]) {
		let temp = this.heap[currInd];
		this.heap[currInd] = this.heap[parentInd];
		this.heap[parentInd] = temp;
		currInd = parentInd;
		parentInd = (currInd % 2 === 0) ? (currInd - 2) / 2 : (currInd - 1) / 2;
	}
	console.log(this.heap);
}

let mh = new MinHeap();
mh.add(5);
mh.add(3);
mh.add(2);
mh.add(7);
mh.add(6);
mh.add(8);
mh.add(11);
mh.add(1);
mh.remove();
mh.remove();


