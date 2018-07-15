var permute = function(nums) {
  res = [];
  permuteHelper(nums, res, 0)
  return res;
};

function permuteHelper(arr, res, left) {
  if (left >= arr.length - 1) {
    res.push(arr.slice())
  } else {
    for (let i = left; i < arr.length; i++ ) {
      swap(arr, i, left)
      permuteHelper(arr, res, left + 1);
      swap(arr, i, left)
    }
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

console.log(permute([1, 2, 3]))