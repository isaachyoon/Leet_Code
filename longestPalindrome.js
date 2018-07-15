/*function longestPalindrome(str) {
	for (let i = 0; i < str.length; i++) {
		findPalindrome(str, i);
	}
}


function findPalindrome(str, i) {
	let j = i;
	let maxPalindrome = ''
	while (j < str.length) {
		let palindrome = checkPalindrome(str, i, j);
		if (palindrome.length > maxPalindrome.length) {
			maxPalindrome = palindrome;
		}
		j++;
	}
	return maxPalindrome;
}

function checkPalindrome() {

}
*/

function longestPalindrome(str) {
	let maxPalindrome = ''
	for (let i = 0; i < str.length; i++) {
		let res1, res2;
		if (str[i] === str[i+1]) {
			res1 = findPalindrome(str, i-1, i+2, str[i]+str[i+1])
		}
		res2 = findPalindrome(str, i-1, i+1, str[i]);
		let longer = res1 && res1.length > res2.length ? res1 : res2;
		if (longer.length > maxPalindrome.length) {
			maxPalindrome = longer
		}
	}
	return maxPalindrome;
}

function findPalindrome(str, left, right, centerStr) {
	let currPalindrom = centerStr;
	let leftInd = left;
	let rightInd = right;
	//if right letter is same as center
	while (leftInd >= 0 && rightInd < str.length) {
		if(str[leftInd] && str[leftInd] === str[rightInd]) {
			currPalindrom = str[leftInd] + currPalindrom + str[rightInd];
			leftInd--;
			rightInd++;
		} else {
			return currPalindrom;
		}
	}
	return currPalindrom;
}

console.log(longestPalindrome('ccccc'));
//Time comlexity: n^2
