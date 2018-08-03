var merge = function(nums1, m, nums2, n) {
  if (m === 0) {
  	for (let i = 0; i < n; i++) {
  		nums1[i] = nums2[i]
  	}
  } else {
    let ptr = nums1.length - 1;
    while(m >= 0 && n > 0) {
      if (nums1[m-1] >= nums2[n-1]) {
        nums1[ptr--] = nums1[m-1];
        m--; 
      } else {
        nums1[ptr--] = nums2[n-1];
        n--
      }
    }
  }
  console.log(nums1)
};

  

let res = merge ([0], 0, [1, 2, 3], 3);
console.log(res);

/*	
	[2, 0]
   ^  ^  
	[1, 2 ,3]
   ^

*/