var isRectangleOverlap = function(rec1, rec2) {
	let xDistance = 0;
	let yDistance = 0;
  const [x1, y1, x2, y2] = rec1;
  const [x3, y3, x4, y4] = rec2;

  let xArr = [[x1, x2], [x3, x4]];
  let yArr = [[y1, y2], [y3, y4]];

  xArr = xArr.sort((x,y) => x[0] - y[0]);
  yArr = yArr.sort((x,y) => x[0] - y[0]);

  xDistance = xArr[0][1] - xArr[1][0];
  yDistance = yArr[0][1] - yArr[1][0];

  return (xDistance > 0 && yDistance > 0);

};

// const rect1 = [0,0,2,2];
// const rect2 = [1,1,3,3];

// const rect1 = [7,8,13,15];
// const rect2 = [10,8,12,20];
// const rect1 = [0,0,1,1]; 
// const rect2 = [1,0,2,1];

const rect1 = [5,15,8,18]; 
const rect2 = [0,3,7,9];


let res = isRectangleOverlap(rect1, rect2);
console.log(res);