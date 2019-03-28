var findAndReplacePattern = function(words, pattern) {
	let res = [];
	for (let i = 0; i < words.length; i++) {
		const wDict = {};
		const pDict = {};
		let flag = true;
		for (let j = 0; j < words[i].length; j++) {
			if (wDict[words[i][j]] !== pDict[pattern[j]]) {
				flag = false;
				break;
			}
			wDict[words[i][j]] = j;
			pDict[pattern[j]] = j;
		}
		if (flag) res.push(words[i])
	}
	return res;
}



// let words = ["abc","deq","mee","aqq","dkd","ccc"];
let words = ["ef","fq","ao","at","lx"]

// let pattern = "abb";
let pattern = "ya";

console.log(findAndReplacePattern(words, pattern))
