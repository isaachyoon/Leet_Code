var combine = function(n, k) {
	let res = [];
	combineHelper(n, k, 1, [], res);
	console.log(res)
	return res;
}

// function combineHelper(n, k, ind, temp, res) {
// 	if(temp.length === k) {
// 		res.push(temp.slice(0));
// 		return;
// 	}
	
// 	if(ind <= n) {
// 		temp.push(ind);
// 		combineHelper(n, k, ind + 1, temp, res)
// 		temp.pop()
// 		combineHelper(n, k, ind + 1, temp, res)
// 	}
// }


function combineHelper(n, k, ind, temp, res) {
	if(temp.length === k) {
		res.push(temp.slice(0));
		return;
	}
	for (let i = ind; i <= n; i++) {
		temp.push(i)
		combineHelper(n, k, i + 1, temp, res);
		temp.pop();
	}
}


combine(4, 2)