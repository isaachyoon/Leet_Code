//LEET 401
var readBinaryWatch = function(num) {
	let res = [];
	let time = [0, 0];
	let led = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];
	createTime(num, 0, 0, 0, led, res);
	return res;
}

function createTime(num, ind, hour, min, led, res) {
	if (num === 0) {
		if (min < 10) {
			min = '0' + min;
		}
		res.push(`${hour}:${min}`);
		return;
	}
	for(let i = ind; i < led.length; i++) {
		if(i < 4 && (hour + led[i]) < 12) { //hour
			createTime(num - 1, i + 1, hour + led[i], min, led, res);
		}
		else if (i >= 4 && (min + led[i]) <= 60) { //min
			createTime(num - 1, i + 1, hour, min + led[i], led, res);
		}
	}
}

let res = readBinaryWatch(2);
console.log(res.sort())

// let count = ["0:03","0:05","0:06","0:09","0:10","0:12","0:17","0:18","0:20","0:24","0:33","0:34","0:36","0:40","0:48","1:01","1:02","1:04","1:08","1:16","1:32","2:01","2:02","2:04","2:08","2:16","2:32","3:00","4:01","4:02","4:04","4:08","4:16","4:32","5:00","6:00","8:01","8:02","8:04","8:08","8:16","8:32","9:00","10:00"].length
// console.log(count)