function calPoints(ops) {
	let stack = [];
	let subTotal = 0;
	for (let i = 0; i < ops.length; i++) {
		if (Math.pow(ops[i], 2) >= 0) {
			console.log('hi', ops[i])
			subTotal += ops[i] * 1;
			stack.push(ops[i] * 1);
		} else if (ops[i] === 'C') {
			subTotal -= stack[stack.length-1];
			stack.pop();
		} else if (ops[i] === 'D') {
			let doublePts = stack[stack.length -1] * 2; 
			stack.push(doublePts);
			subTotal += doublePts;
		} else if (ops[i] === '+') {
			let lastTwoValue = stack[stack.length -1] + stack[stack.length -2];
			subTotal += lastTwoValue;
			stack.push(lastTwoValue);
		}
	}
	return subTotal
}

let res = calPoints(["-21","-66","39","+","+"])
console.log(res)