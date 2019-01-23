var lengthOfLongestSubstring = function(s) {
	let p1 = 0;
	let p2 = 0;
	let set = new Set();
	let max = 0;
	while (p1 < s.length && p2 < s.length) {
		console.log(set)
		if (!set.has(s[p2])) {
			set.add(s[p2]);
			p2++;
		} else if (s[p1] === s[p2]) {
			p1++;
			p2++;
		} else if (set.has(s[p2])) {
			max = Math.max(max, set.size);
			while (s[p1] !== s[p2]) {
				set.delete(s[p1]);
				p1++;
			}
			p1++;
			p2++;
		}
		max = Math.max(max, set.size);
	}	
	return max;
}

let res = lengthOfLongestSubstring('bbbbb');
console.log(res)