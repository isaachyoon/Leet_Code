var findPeakElement = function(nums) {
  if(nums.length < 2) {
  	return 0
  }
  let start = 0;
  let end = nums.length -1;
  
  while (start < end) {
    let mid1 = Math.floor((start + end) / 2);
    let mid2 = mid1 + 1;
    console.log(start, end, mid1)
    if (nums[mid2] > nums[mid1]) {
      start = mid2;
    } else {
      end = mid1;
    }
  }
  return start;
};

let input1 = [1, 2, 3, 1];
let input2 = [1,2,1,3,5,6,4];
console.log(findPeakElement(input2))