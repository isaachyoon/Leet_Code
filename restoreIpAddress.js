var restoreIpAddresses = function(s) {
	let res = [];
	restoreHelper(s, 0, '', 4, res);
	return res;
}

function restoreHelper(s, ind, ipAddress, slot, res) {
	if (slot === 0 && ind === s.length) {
		res.push(ipAddress);
		return;
	}
	let currStr = '';
	for (let i = ind; i < s.length; i++) {
		currStr += s[i];
		let remainLen = s.length - i + 1;
		if (currStr.length <= 3 && remainLen/slot <= 3 && remainLen/slot >= 1 &&  currStr <= 255) {
			if (currStr.length > 1 && currStr[0] === '0') {
				return;
			} else if (ind === 0) {
				restoreHelper(s, i + 1, currStr, slot - 1, res);
			} else {
				restoreHelper(s, i + 1, ipAddress + '.' + currStr, slot - 1, res);
			}
		} else if(currStr.length > 3) break;
	}
}
let str1 = '25525511135'
let str2 = "010010"
let res = restoreIpAddresses(str2);
console.log(res)