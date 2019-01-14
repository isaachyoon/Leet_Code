var groupAnagrams = function(strs) {
	let hash = {};
	for (let i = 0; i < strs.length; i++) {
		console.log(strs[i])
		let str = strs[i];
		let sorted = str.split('').sort().join('');
		if (!hash[sorted]) {
			hash[sorted] = [];
		}
		if (hash[sorted]) {
			hash[sorted].push(strs[i]);
		}
	}
	console.log(hash)
	let res = [];
	for (let item in hash) {
		res.push(hash[item]);
	}
	return res;
}

let res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(res)