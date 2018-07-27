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
minLength = 5

startInd = 0 
endInd = 5   

 0123456789012
 ADOBECODEBANC
    ^
          ^ 
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
	let ptr1 = ptr2 = 0;
	let min = Number.POSITIVE_INFINITY, startInd, endInd, lettersToFind = t.length;
	while (ptr2 !== s.length -1) {
		while (lettersToFind !== 0) { //breaks out if no more letters to find
			if (ptr2 !== 0 && s[ptr1] === s[ptr2]) {
				break;
			}
			if (!!letterMap[s[ptr2]]) {
				letterMap[s[ptr2]]--;
				if (letterMap[s[ptr2]] === 0) {
					lettersToFind--;
				}
 			}
			if(lettersToFind === 0 && ((ptr2 - ptr1) < min)) {
				startInd = ptr1;
				endInd = ptr2;
				break;
			}
			ptr2++;
		}
		// console.log(ptr1, ptr2)
		if (s[ptr1] !== s[ptr2]) {
			letterMap[s[ptr1++]]++;
			lettersToFind++;
		} else if (s[ptr1] === s[ptr2]) {
			ptr1++;
		}

		while (typeof letterMap[s[ptr1]] !== 'number') {
			ptr1++;
		}	
	}
	console.log(startInd, endInd)
	return s.slice(startInd, endInd+1);
}

// let s = 'ADOBECODEBANC';
// let t = 'ABC' 
let s = 'A', t = 'A';
console.log(minWindow(s, t));