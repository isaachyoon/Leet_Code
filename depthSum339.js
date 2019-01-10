var depthSum = function(nestedList) {
  return depthSumHelper(nestedList, 1)
};

function depthSumHelper(list, level) {
  let sum = 0;
  list.forEach((item) => {
    if (Array.isArray(item)) {
    	sum += depthSumHelper(item, level + 1)
    } else {
    	sum += (item * level);
    }
  })
  return sum;
}


let sample1 = [[1,1],2,[1,1]];
let sample2 = [1,[4,[6]]];
let res = depthSum(sample1);
console.log(typeof res)