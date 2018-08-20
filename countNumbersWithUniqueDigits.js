var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) return 1;
  if (n === 1) return 9;
  let resArr = new Array(n+1);
  resArr[0] = 1;
  resArr[1] = 9;
  
  for (let i = 2; i <= n; i++) {
    resArr[i] = resArr[i-1] * (10 - i + 1);
  }
  console.log('res', resArr)
  return resArr.reduce((x,y) => {
    return x+ y
  }, 0)
}

let res = countNumbersWithUniqueDigits(4);
console.log(res);