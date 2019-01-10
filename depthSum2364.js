var depthSumInverse = function(nestedList) {
  let res = [];
  depthSumHelper(nestedList, 0, res);
  let total = 0;
  let counter = 1;
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] === undefined) {
      res[i] = 0;
    }
    total += res[i] * counter;
    counter++;
  }
  console.log(total)
  return total;
};

function depthSumHelper(list, level, res) {
  list.forEach((item) => {
    if (item.isInteger()) {
      res[level] = res[level] || 0;
      res[level] += item.getInteger();
    } else {
      depthSumHelper(item.getList(), level+1, res);
    }
  });
};