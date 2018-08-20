var generateAbbreviations = function(word) {
	let res = [];
	generate(word, 0, res)
	return res;
}

function generate(word, ind, res) {
	if (ind > word.length) return;
	res.push(word);

	for (let i = 1; i <= word.length; i++) {
		for (let j = ind; j < word.length; j++) {
			if (!isNaN(word[j-1])) {
				// console.log(word, word[j-1])
				continue;
			}
			if (word.length - j + 1 > i) {
				let temp = word.substring(0, j) + i + word.substring(j+i) 
				generate(temp, j + 1, res)
			}
		}
	}
}

// generateAbbreviations('word')



var generateAbbreviations2 = function(word) { //leetcode answer
	let res = [];
	backtrack(res, word, 0, '', 0);
	console.log(res)
	return res;
}

function backtrack(res, word, pos, cur, count) {
	console.log(cur)
	if (pos === word.length) {
		if (count > 0) cur += count;
		res.push(cur);
	} else {
		backtrack(res, word, pos + 1, cur, count + 1);
		backtrack(res, word, pos + 1, cur + (count > 0 ? count : '') + word.charAt(pos), 0);
	}
}

generateAbbreviations2('word');

