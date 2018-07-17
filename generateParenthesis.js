var generateParenthesis = function(n) {
  let res = [];
  generateParen(res, '', n, n);
  return res;
};

function generateParen(res, curr, open, close) {
  if (open > close || open < 0 || close < 0) {
    return;
  }
  if (open === 0 && close === 0) {
     res.push(curr)
  } else {
    generateParen(res, curr + "(", open-1, close); 
    generateParen(res, curr + ")", open, close-1);
  }
}

console.log(generateParenthesis(3))