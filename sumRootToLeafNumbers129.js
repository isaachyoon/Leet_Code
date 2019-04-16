var sumNumbers = function(root) {
  if (!root) return 0;
	let agg = [0]
	sumNumbersHelper(root, '', agg);
	return agg[0];
};	

function sumNumbersHelper(root, num, agg) {
  if (!root) {
    return;
  }
  
	if (!root.left && !root.right) {
		agg[0] += parseInt(num + root.val);
    return;
	}

	sumNumbersHelper(root.left, num + root.val, agg);
	sumNumbersHelper(root.right, num + root.val, agg);
};