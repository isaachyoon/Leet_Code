var wiggleSort = function(nums) {
  if(nums[0] > nums[1]) {
    swap(nums, 0);
  } 
  for (let i = 1; i < nums.length-1; i++) {
    if (i % 2 === 0 && (nums[i] > nums[i - 1] || nums[i] > nums[i + 1] )) { //even, but no smaller than contiguous
      swap(nums, i);
    } else if (i % 2 !== 0 && (nums[i] < nums[i - 1] || nums[i] < nums[i+1])) { //
      swap(nums, i);
    }
  }
  // return nums;
};

function swap(nums, i) {
  let temp = nums[i];
  nums[i] = nums[i + 1];
  nums[i + 1] = temp;
}

// let arr = [3, 5, 1,6, 1, 2];
// let arr = [1, 2, 3, 4, 5, 6];
let arr = [3, 1, 2]
console.log(wiggleSort(arr))