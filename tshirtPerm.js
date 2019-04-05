/**
 *
 * @param {Number} num  - number of people
 * @param {Array} color - array of t-shirt colors available
 */
function permuteTshirt(num, color) {
	const numArr = [];
	return permuteTshirtHelper(num, numArr, color, 0);
}

/**
 *
 * @param {Number} num  - number of people
 * @param {Array} numArr - array to store colors, index representing person
 * @param {Array} color - array of t-shirt colors available
 * @param {Array} index - index to keep track of count
 */
function permuteTshirtHelper(num, numArr, color, index) {
	if (index > num) {
		return 0;
	}
	if (numArr.length >= num) {
		return 1;
	}
	let combination = 0;
	for (let i = 0; i < color.length; i++) {
		numArr.push(color[i]);
		combination += permuteTshirtHelper(num, numArr, color, index + 1);
		numArr.pop();
	}
	return combination;
}

console.log(permuteTshirt(4, ['yellow', 'red']))