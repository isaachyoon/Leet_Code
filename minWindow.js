/*
 0123456789012
 ADOBECODEBANC
    ^
      ^ 

 {
	A: 1
	B: 0
	C: 0
 }
startInd = 0
endInd = 5
length: 1

minLength = 5;  /(10-3 = 7 nope. keep 5)
startInd = 0 
endInd = 5   


*/
function minWindow(s, t) {
	let letterMap = {};
	for (let i = 0; i < t.length; i++) {
		let currLetter = t[i];
		if (!letterMap[currLetter]) {
			letterMap[currLetter] = 0;
		}
		letterMap[currLetter]++;
	}
	let ptr1, ptr2 = 0;
	let min = Number.POSITIVE_INFINITY;
	let startInd, endInd;
	let lettersToFind = t.length;
	while (ptr2 !== s.length -1) {
		while (lettersToFind !== 0) {
			if (ptr2 !== 0 && s[ptr1] === s[ptr2]) {
				break;
			}
			if (--letterMap[s[ptr2++]] === 0) {
				lettersToFind--;
				if(lettersToFind === 0 && ((ptr2 - ptr1) < min)) {
					startInd = ptr1;
					endInd = ptr2;
					letterMap[ptr1]++;
					lettersToFind++;
				}
			}
		}
		while (!letterMap[s[ptr1]]) {
			ptr1++;
		}	
	}
}