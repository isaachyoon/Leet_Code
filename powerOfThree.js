var isPowerOfThree = function(n) {
	if (n < 1) {
		return false;
	}
  while (n !== 1) {
    if (n % 3 !== 0) {
      return false;
    }
    n /= 3;
  }
  return true;
};


console.log(isPowerOfThree(8))
/*
27/3/3/3
3^0  = 1
*/