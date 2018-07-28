var anagramMappings = function(A, B) {
  let hash = {};
  for (let i = 0; i < B.length; i++) {
    hash[B[i]] = i;
  }
  for (let j = 0; j < A.length; j++) {
    A[j] = hash[A[j]];
  }
  return A;
};

let A = [12, 28, 46, 32, 50]
let B = [50, 12, 32, 46, 28]
console.log(anagramMappings(A, B));