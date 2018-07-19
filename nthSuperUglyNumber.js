var nthSuperUglyNumber = function(n, primes) {
  let set = new Set();
  set.add(1);
  let num = primes[0];
  let max = 1;
  let inc = primes[0];
  let point = 0;
  while(set.size !== n) {
    if (point < primes.length && primes[point] < num) {
      if(!set.has(primes[point])) {
        set.add(primes[point]);
        max = primes[point];
      }
      point++;  
      continue;
    }
    for (let i = 0; i < primes.length; i++ ) {
      let dividedNum = num / primes[i];
      if (set.has(dividedNum)) {
          set.add(num)
          max = num;
          break;
      }
    }
  num += inc;
  }
  console.log(set)
  return max;
};

 
// console.log(nthSuperUglyNumber(12, [2,7,13,19]))
// console.log(nthSuperUglyNumber(3, [2,3,5]))
console.log(nthSuperUglyNumber(15, [3,5,7,11,19,23,29,41,43,47]))

