
var dailyTemperatures = function(temperatures) {
	let stack = [];
	let last = temperatures.length - 1;  
	stack.push([temperatures[last], last]); //[73]
	temperatures[last] = 0; 
	for (let i = temperatures.length - 2; i >= 0; i--) {
		while (stack.length > 0 && temperatures[i] >= stack[stack.length-1][0] ) { //76 
			stack.pop();
		}
		stack.push([temperatures[i], i]);
		if (stack.length === 1) {
			temperatures[i] = 0;
		} else {
			temperatures[i] = stack[stack.length - 2][1] - stack[stack.length - 1][1];
		}
	}
	return temperatures
}

// console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]));