var restoreIpAddresses = function(s) {
  let res = [];
  createIpAddress(s, res, '', 4)
  return res;
};

function createIpAddress(str, res, ipAddress, sections) {
  // console.log(str, ipAddress, sections)
  // if (str.length / sections > 3) {
    // return;
  // }
  
  if(str.length === 0 && sections === 0) {
    res.push(ipAddress.slice(1));
    return;
  } 
  
  for (let i = 0; i < 3; i++) {
    let currStr = str.substring(0, i + 1);
    let remaining = str.substring(i+1);
    console.log('sections', currStr, remaining.length, sections)
    if (currStr <= 255 && !(currStr.length > 1 && currStr[0] === '0') && (remaining.length / sections < 3)) {
      createIpAddress(remaining, res, ipAddress + '.' + currStr, sections - 1);
    }
  }
}
// console.log(restoreIpAddresses('25525511135'))
console.log(restoreIpAddresses('0000'))

console.log('000'.substring(0, 1))
