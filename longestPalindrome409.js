/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let isThereOdd = false;
  let obj = {};
  let longestLength = 0;
  let oddFound = 0;
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] + 1 || 1;
  }
  console.log(obj)
  for (let item in obj) {
    if (obj[item] % 2 === 0) {
      longestLength += obj[item];
    } else {
      oddFound = 1;
      longestLength += obj[item] - 1;
    }
  }
  return longestLength + oddFound;
};

let res = longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth');
console.log(res)