//x1 = A, x2 = C
//x3 = E, x4 = G

//y1 = B, y2 = D
//y3 = F, y4 = H

var computeArea = function(A, B, C, D, E, F, G, H) {
	let xArr = [[A, C], [E, G]];
	let yArr = [[B, D], [F, H]];

	let xIntersectedDistance = findDistance(xArr);
	let yIntersectedDistance = findDistance(yArr);

	let totalArea = (C - A) * (D - B) + (G - E) * (H - F); 
	const IntersectedDistance = (xIntersectedDistance > 0 && yIntersectedDistance > 0) ? xIntersectedDistance * yIntersectedDistance : 0;
	return totalArea - IntersectedDistance;
}

function findDistance(arr) {
	let sortedArr = arr.sort((x,y) => x[0] - y[0]);
	if (sortedArr[0][1] > sortedArr[1][1]) {
		return sortedArr[1][1] - sortedArr[1][0]
	} else {
		return sortedArr[0][1] - sortedArr[1][0];
	}
}

// const A = -3; 
// const B = 0;
// const C = 3;
// const D = 4;
// const E = 0;
// const F = -1;
// const G = 9;
// const H = 2;

const A = -2; 
const B = -2;
const C = 2;
const D = 2;
const E = 3;
const F = 3;
const G = 4;
const H = 4;


let res = computeArea(A, B, C, D, E, F, G, H)
console.log(res);