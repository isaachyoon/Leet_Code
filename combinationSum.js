var combinationSum3 = function(k, n) {
	let res = [];
	combinationHelper(k, n, 1, [], res);
	return res;
}

function combinationHelper(k, n, ind, comb, res) {
	if (k === 0 && n === 0) {
		let ans = comb.slice(0);
		res.push(ans)
		return;
	}

	for (let i = ind; i < 10; i++) {
		if (n - i < 0) break;
		comb.push(i);
		combinationHelper(k - 1, n - i, i + 1, comb, res);
		comb.pop(i)
	}
}

let res = combinationSum3(3, 9);
console.log(res);