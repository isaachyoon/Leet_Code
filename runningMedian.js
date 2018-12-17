/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.medianArr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
	let start = 0;
	// if (this.medianArr.length === 0) {
	// 	this.medianArr.push(num)
	// 	return;
	// }
	let end = this.medianArr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		if (this.medianArr[mid] < num) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
	this.medianArr.splice(start, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  if (this.medianArr.length % 2 === 0) {
			let ceil = this.medianArr.length / 2;
			let floor = ceil - 1;
			return (this.medianArr[ceil] + this.medianArr[floor]) / 2;
		} else {
			return this.medianArr[(this.medianArr.length - 1) / 2];;
		}    
};


let mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian());
// mf.addNum(5);
mf.addNum(3);
console.log(mf.findMedian());

// runningMedian([12, 4, 5, 3, 8, 7])