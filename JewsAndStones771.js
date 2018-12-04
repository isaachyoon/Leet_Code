
function numJewelsInStones(J, S) {
	let set = new Set();
	let counter = 0;
	for (let i = 0; i < J.length; i++) {
		set.add(J[i]);
	}
	for (let i = 0; i < S.length; i++) {
		if (set.has(S[i])) {
			counter++;
		}
	}
	return counter;
}

let J = "aA";
let S = "aAAbbbb";

let res = numJewelsInStones(J, S);

