//784

var letterCasePermutation = function(S) {
	let res = [];
	mapPermutation(S, 0, '', res);
	return res;
}

function mapPermutation(S, ind, temp, res) {
	if (ind >= S.length) {
		res.push(temp);
		return;
	}
	if (S.charCodeAt(ind) >= 97 && S.charCodeAt(ind) <= 122 || S.charCodeAt(ind) >= 65 && S.charCodeAt(ind) <= 90) {
		let uppercase = S[ind].toUpperCase();
		let lowercase = S[ind].toLowerCase();
		mapPermutation(S, ind + 1, temp + uppercase, res);
		mapPermutation(S, ind + 1, temp + lowercase, res);

	} else {
		mapPermutation(S, ind + 1, temp + S[ind], res);
	}

}

let res = letterCasePermutation("Z");
console.log(res);

/*
time complexity: 
*/