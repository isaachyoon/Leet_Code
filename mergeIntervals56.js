var merge = function(intervals) {
	intervals = intervals.sort((x,y) => x.start-y.start);
	let res = [intervals[0]];
	for (let i = 1; i < intervals.length; i++) {
		// let compareNum = Math.max(res[res.length - 1].end, intervals[i].start);
		// console.log(compareNum,  intervals[i].start)
		if (res[res.length-1].end > intervals[i].end) {
			continue;
		} else if (res[res.length-1].end >= intervals[i].start) { // combine
			res[res.length-1].end = intervals[i].end;
			// console.log(compareNum, res)
		} else {
			res.push(intervals[i]);
		}
	}
	return res;
}

let test = [[1,],[2,6],[8,10],[15,18]];
let test2 = [[1,3],[2,6],[8,10],[15,18]];
let test3 = [{start: 1, end: 4},{start:4, end:5}];
let test4 = [[1,3],[2,6],[8,10],[15,18]];

function parseArr(arr) {
	let newArr = arr.map((inner) => {
		return {
			start: inner[0],
			end: inner[1]
		}
	})
	return newArr;
}

let res = merge(parseArr(test4));
console.log(res)